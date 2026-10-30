(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = 'pt';
  try { if (localStorage.getItem('mcs-lang') === 'en') lang = 'en'; } catch (e) {}

  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var t = function (o) { return o[lang] || o.pt; };

  /* ── reveal on scroll ───────────────────────────────────────────────── */
  var io = ('IntersectionObserver' in window && !reduced) ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -10% 0px', threshold: .05 }) : null;
  function watch(els) { els.forEach(function (el) { if (io) io.observe(el); else el.classList.add('is-in'); }); }

  /* ── renderers (re-run when the language changes) ───────────────────── */
  var filter = 'archive';
  var arrow = '<svg class="row__go" viewBox="0 0 32 32" aria-hidden="true"><path d="M8 24L24 8M11 8h13v13"/></svg>';

  function renderProjects() {
    $('#index').innerHTML = PROJECTS.filter(function (p) { return p.group === 'archive'; }).map(function (p) {
      return '<li class="card fade"><div class="card__img"><img src="' + IMG + p.img + '" alt="" loading="lazy"></div>' +
        '<p class="card__year">' + esc(p.year) + '</p><h4 class="card__name">' + esc(p.name) + '</h4>' +
        '<p class="card__place">' + esc(p.place) + '</p><p class="card__p">' + esc(t(p)) + '</p></li>';
    }).join('');
    watch($$('#index .card'));
  }


  // restaurants: one full panel per house, the Madeira teaser, the archive as cards
  function renderHouses() {
    var label = { gal: (lang === 'en' ? I18N.en['proj.gallery'] : 'Ver galeria'), book: (lang === 'en' ? I18N.en['proj.book'] : 'Reservar'), photos: (lang === 'en' ? I18N.en['proj.photos'] : 'fotografias') };
    var list = PROJECTS.filter(function (p) { return p.group === 'now'; });
    $('#houses').innerHTML = list.map(function (p, i) {
      return '<article class="resto fade">' +
        '<button type="button" class="resto__img" data-house="' + i + '" data-at="0" aria-label="' + label.gal + ': ' + esc(p.name) + '"><img src="' + IMG + (p.cover || p.photos[0]) + '" alt="" loading="lazy"></button>' +
        '<div class="resto__body">' +
          '<p class="resto__place">' + esc(p.place) + ' · ' + (lang === 'en' ? 'since ' : 'desde ') + esc(p.year.replace(/\s*—\s*$/, '')) + '</p>' +
          '<h3 class="resto__name">' + esc(p.name) + '</h3>' +
          '<p class="resto__p">' + esc(t(p)) + '</p>' +
          '<div class="resto__btns">' +
            '<button type="button" class="btn btn--line" data-house="' + i + '" data-at="0">' + label.gal + ' <small>' + p.photos.length + '</small></button>' +
            (p.link ? '<a class="btn" href="' + p.link + '" target="_blank" rel="noopener">' + label.book + ' ↗</a>' : '') +
          '</div>' +
        '</div></article>';
    }).join('');
    var soon = PROJECTS.filter(function (p) { return p.group === 'soon'; })[0];
    $('#soon').innerHTML = soon ? '<p class="soon__kicker">' + (lang === 'en' ? I18N.en['soon.kicker'] : 'Em breve') + '</p><h3 class="soon__name">' + esc(soon.name) + '</h3><p class="soon__p">' + esc(t(soon)) + '</p>' : '';
    watch($$('#houses .resto'));
  }

  // dishes and gallery: rails dragged sideways, one per category
  function railHTML(key, title, items) {
    return '<div class="rail"><div class="rail__head"><h3 class="rail__title">' + esc(title) + '</h3>' +
      '<div class="rail__nav"><button type="button" data-rail-dir="-1" aria-label="Anterior">←</button><button type="button" data-rail-dir="1" aria-label="Seguinte">→</button></div></div>' +
      '<div class="rail__stage"><div class="rail__track">' + items.map(function (it, i) {
        return '<figure class="shot' + (it.video ? ' shot--film' : '') + '"><button type="button" class="shot__plate" data-rail="' + key + '" data-at="' + i + '">' +
          '<img src="' + IMG + it.img + '" alt="" loading="lazy" draggable="false">' +
          (it.video ? '<span class="shot__play"><i><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></i></span>' : '') +
          '</button><figcaption>' + esc(it.cap) + (it.sub ? '<span>' + esc(it.sub) + '</span>' : '') + '</figcaption></figure>';
      }).join('') + '</div></div></div>';
  }
  var RAILS = {};
  function renderRails() {
    RAILS = {};
    $('#dish-rails').innerHTML = DISH_CATS.map(function (c) {
      var items = DISHES.filter(function (x) { return x.cat === c.key; }).map(function (x) { return { img: x.img, cap: t(x), sub: x.house }; });
      RAILS[c.key] = items;
      return railHTML(c.key, t(c), items);
    }).join('');
    RAILS.photos = GALLERY.filter(function (g) { return !g.video; }).map(function (g) { return { img: g.img, cap: t(g) }; });
    RAILS.films = GALLERY.filter(function (g) { return g.video; }).map(function (g) { return { img: g.img, cap: t(g), video: g.video }; });
    $('#gal-rails').innerHTML = railHTML('photos', (lang === 'en' ? I18N.en['gal.photos'] : 'Fotografias'), RAILS.photos) + railHTML('films', (lang === 'en' ? I18N.en['gal.films'] : 'Vídeos'), RAILS.films);
    $$('.rail__stage').forEach(dragScroll);
  }

  // press a mouse and drag a rail; fingers and trackpads already scroll it
  function dragScroll(stage) {
    if (stage.dataset.drag) return; stage.dataset.drag = '1';
    var down = false, moved = false, startX = 0, startLeft = 0;
    stage.addEventListener('pointerdown', function (e) {
      if (e.button !== 0 || e.pointerType === 'touch') return;
      down = true; moved = false; startX = e.clientX; startLeft = stage.scrollLeft;
    });
    stage.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (!moved && Math.abs(dx) < 5) return;
      moved = true; stage.classList.add('is-dragging');
      stage.scrollLeft = startLeft - dx;
    });
    function up() { down = false; setTimeout(function () { stage.classList.remove('is-dragging'); }, 0); }
    stage.addEventListener('pointerup', up); stage.addEventListener('pointerleave', up);
    // a drag must not count as a click on the photo underneath
    stage.addEventListener('click', function (e) { if (moved) { e.stopPropagation(); e.preventDefault(); moved = false; } }, true);
  }

  function renderPath() {
    $('#path-track').innerHTML = TIMELINE.map(function (s) {
      var c = t(s), y = (lang === 'en' && s.yEn) ? s.yEn : s.y;
      return '<article class="stop' + (s.img ? ' stop--img' : '') + '">' +
        '<p class="stop__y">' + y + '</p><h3 class="stop__t">' + esc(c[0]) + '</h3><p class="stop__p">' + esc(c[1]) + '</p>' +
        (s.img ? '<div class="stop__img"><img src="' + IMG + s.img + '" alt="" loading="lazy"></div>' : '') +
        '</article>';
    }).join('');
  }

  function renderBooks() {
    $('#shelf').innerHTML = BOOKS.map(function (b) {
      return '<article class="book fade"><div class="book__cover"><img src="' + IMG + b.img + '" alt="Capa: ' + esc(b.title) + '" loading="lazy"></div>' +
        '<p class="book__y">' + b.year + '</p><h3 class="book__t">' + esc(b.title) + '</h3><p class="book__p">' + esc(t(b)) + '</p></article>';
    }).join('');
    watch($$('#shelf .book'));
  }

  function renderPress() {
    var one = PRESS.map(function (p, i) {
      return '<button class="clip" type="button" data-press="' + i + '"><img src="' + IMG + p[0] + '" alt="Recorte: ' + esc(p[1]) + '" loading="lazy"><span>' + esc(p[1]) + '</span></button>';
    }).join('');
    $('#marquee').innerHTML = one + one.replace(/<button /g, '<button aria-hidden="true" tabindex="-1" ');
  }

  function renderGallery() {
    $('#mosaic').innerHTML = GALLERY.map(function (g, i) {
      var film = !!g.video;
      return '<button class="tile tile--' + g.size + (film ? ' tile--film' : '') + ' fade" style="--i:' + i + '" type="button" data-gal="' + i + '">' +
        '<img src="' + IMG + g.img + '" alt="' + esc(t(g)) + '" loading="lazy">' +
        (film ? '<span class="tile__play"><i><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></i></span>' : '') +
        '<span class="tile__cap">' + esc(t(g)) + '</span></button>';
    }).join('');
    watch($$('#mosaic .tile'));
  }

  /* ── i18n: PT lives in the markup, EN in data.js ────────────────────── */
  var pt = {};
  $$('[data-i18n]').forEach(function (el) { pt[el.dataset.i18n] = el.innerHTML; });

  function applyLang() {
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach(function (el) {
      var k = el.dataset.i18n;
      var v = lang === 'en' ? I18N.en[k] : pt[k];
      if (v != null) el.innerHTML = v;
    });
    $$('#lang span').forEach(function (s, i) { s.classList.toggle('is-on', (i === 0) === (lang === 'pt')); });
    splitStatement();
    renderHouses(); renderRails(); renderProjects(); renderPath(); renderBooks(); renderPress();
    sizePath();
  }
  $('#lang').addEventListener('click', function () {
    lang = lang === 'pt' ? 'en' : 'pt';
    try { localStorage.setItem('mcs-lang', lang); } catch (e) {}
    applyLang();
  });

  /* ── the statement lights up word by word ───────────────────────────── */
  function splitStatement() {
    $$('[data-split]').forEach(function (el) {
      el.innerHTML = el.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' ');
    });
  }
  function lightWords() {
    $$('[data-split]').forEach(function (el) {
      var r = el.getBoundingClientRect(), vh = innerHeight;
      var p = Math.min(1, Math.max(0, (vh * .85 - r.top) / (r.height + vh * .35)));
      var ws = $$('.w', el), n = Math.round(p * ws.length);
      ws.forEach(function (w, i) { w.classList.toggle('on', i < n); });
    });
  }

  /* ── hero: a reel of his kitchen, or a film if one is dropped in ────── */
  var reel = $('#reel'), frames = $$('#reel img'), cur = 0, reelTimer;
  function nextFrame() {
    frames[cur].classList.remove('is-on');
    cur = (cur + 1) % frames.length;
    frames[cur].classList.add('is-on');
    $('#reel-n').textContent = String(cur + 1).padStart(2, '0');
  }
  if (!reduced && frames.length > 1) reelTimer = setInterval(nextFrame, 5200);

  var vid = $('#hero-video');
  vid.addEventListener('loadeddata', function () {
    reel.classList.add('has-video'); clearInterval(reelTimer);
    vid.play().catch(function () {});
  });
  vid.src = 'assets/video/hero.mp4';
  vid.preload = 'auto';
  vid.load();

  requestAnimationFrame(function () {
    setTimeout(function () { $$('.hero .rise, .hero .fade').forEach(function (el, i) { setTimeout(function () { el.classList.add('is-in'); }, i * 140); }); }, 150);
  });

  /* ── bar: solid past the hero, dark over dark bands, current link ───── */
  var bar = $('#bar'), hero = $('.hero');
  var darks = $$('.projects, .contact, .foot');
  var links = $$('.bar__nav a');
  function onScroll() {
    bar.classList.toggle('is-solid', hero.getBoundingClientRect().bottom <= 70);
    var y = 40;
    bar.classList.toggle('is-dark', darks.some(function (d) { var r = d.getBoundingClientRect(); return r.top <= y && r.bottom > y; }));
    var here = null;
    links.forEach(function (a) { var s = $(a.getAttribute('href')); if (s && s.getBoundingClientRect().top <= innerHeight * .4) here = a; });
    links.forEach(function (a) { a.classList.toggle('is-here', a === here); });
    lightWords();
    movePath();
  }

  /* ── percurso: vertical scroll drives a horizontal track ────────────── */
  var path = $('.path'), track = $('#path-track'), prog = $('#path-progress');
  var horizontal = false;
  function sizePath() {
    horizontal = !reduced && innerWidth > 860;
    path.classList.toggle('is-static', !horizontal);
    path.style.height = horizontal ? (track.scrollWidth - innerWidth + innerHeight * 1.15) + 'px' : '';
    movePath();
  }
  function movePath() {
    if (!horizontal) return;
    var r = path.getBoundingClientRect();
    var span = path.offsetHeight - innerHeight;
    var p = Math.min(1, Math.max(0, -r.top / span));
    track.style.transform = 'translate3d(' + (-p * (track.scrollWidth - innerWidth)) + 'px,0,0)';
    prog.style.transform = 'scaleX(' + p + ')';
  }

  /* ── counters ───────────────────────────────────────────────────────── */
  if (io) {
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var el = e.target, to = +el.dataset.to, t0 = performance.now();
        (function tick(now) {
          var k = Math.min(1, (now - t0) / 1400), v = Math.round(to * (1 - Math.pow(1 - k, 3)));
          el.textContent = v; if (k < 1) requestAnimationFrame(tick);
        })(t0);
      });
    }, { threshold: .6 });
    $$('.count').forEach(function (c) { c.textContent = '0'; cio.observe(c); });
  }

  /* ── contact: a simple form ────────────────────────────────────────── */
  var cform = $('#cform');
  cform.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;
    ['nome', 'email', 'mensagem'].forEach(function (n) {
      var f = cform.elements[n], bad = !f.value.trim() || (n === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
      f.closest('.field').classList.toggle('bad', bad); if (bad) ok = false;
    });
    var r = cform.elements.rgpd; r.closest('.check').classList.toggle('bad', !r.checked); if (!r.checked) ok = false;
    if (!ok) return;
    // Demo: nothing is sent yet. In production this posts to the server form handler.
    $$('.field, .check, .cform__two, .cform__send', cform).forEach(function (s) { s.style.display = 'none'; });
    $('.quiz__done', cform).hidden = false;
  });

  /* ── lightbox ───────────────────────────────────────────────────────── */
  var lb = $('#lb'), lbFrame = $('#lb-frame'), lbCap = $('#lb-cap'), items = [], at = 0, lastFocus;
  function show() {
    var it = items[at];
    lb.classList.toggle('is-film', !!it.video);
    lbFrame.innerHTML = it.video
      ? '<iframe src="https://www.youtube-nocookie.com/embed/' + it.video + '?autoplay=1&rel=0" title="' + esc(it.cap) + '" allow="autoplay; fullscreen; picture-in-picture"></iframe>'
      : '<img src="' + it.src + '" alt="' + esc(it.cap) + '">';
    lbCap.textContent = it.cap;
  }
  function open(list, i) {
    items = list; at = i; lastFocus = document.activeElement;
    lb.hidden = false; document.body.style.overflow = 'hidden'; show(); $('#lb-close').focus();
  }
  function close() { lb.hidden = true; lbFrame.innerHTML = ''; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
  function step2(d) { if (items.length < 2 || items[at].video) return; do { at = (at + d + items.length) % items.length; } while (items[at].video); show(); }
  $('#lb-close').addEventListener('click', close);
  $('#lb-prev').addEventListener('click', function () { step2(-1); });
  $('#lb-next').addEventListener('click', function () { step2(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target === lbFrame) close(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') step2(-1);
    if (e.key === 'ArrowRight') step2(1);
  });

  document.addEventListener('click', function (e) {
    var g = e.target.closest('[data-gal]'), p = e.target.closest('[data-press]');
    var hs = e.target.closest('[data-house]'), rl = e.target.closest('[data-rail]'), rn = e.target.closest('[data-rail-dir]');
    if (rn) { var st = rn.closest('.rail').querySelector('.rail__stage'); st.scrollBy({ left: +rn.dataset.railDir * st.clientWidth * .8, behavior: 'smooth' }); return; }
    if (hs) {
      var house = PROJECTS.filter(function (x) { return x.group === 'now'; })[+hs.dataset.house];
      open(house.photos.map(function (src) { return { src: IMG + src, cap: house.name + ' · ' + house.place }; }), +hs.dataset.at);
    } else if (rl) {
      var list = RAILS[rl.dataset.rail];
      open(list.map(function (x) { return { src: IMG + x.img, cap: x.cap + (x.sub ? ' · ' + x.sub : ''), video: x.video }; }), +rl.dataset.at);
    } else if (g) {
      open(GALLERY.map(function (x) { return { src: IMG + x.img, cap: t(x), video: x.video }; }), +g.dataset.gal);
    } else if (p) {
      open(PRESS.map(function (x) { return { src: IMG + x[0], cap: x[1] }; }), +p.dataset.press);
    }
  });
  if ($('#play-film')) $('#play-film').addEventListener('click', function () {
    open([{ video: 'xBet9sDm69s', cap: 'Miguel Castro e Silva' }], 0);
  });

  /* ── mobile drawer ──────────────────────────────────────────────────── */
  var burger = $('#burger'), drawer = $('#drawer');
  function setDrawer(on) {
    drawer.hidden = !on; burger.setAttribute('aria-expanded', on);
    bar.classList.toggle('is-dark', on); bar.classList.toggle('is-solid', on || hero.getBoundingClientRect().bottom <= 70);
    document.body.style.overflow = on ? 'hidden' : '';
  }
  burger.addEventListener('click', function () { setDrawer(drawer.hidden); });
  drawer.addEventListener('click', function (e) { if (e.target.closest('a')) setDrawer(false); });

  /* ── boot ───────────────────────────────────────────────────────────── */
  applyLang();
  watch($$('main .fade:not(.hero .fade), .plate'));
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', sizePath);
  addEventListener('load', sizePath);
  onScroll();
})();
