/* Instagram section: profile and posts come from assets/ig/feed.js;
   every click opens Instagram in a new tab. */
(function () {
  var f = window.IG_FEED; if (!f) { document.getElementById('instagram').hidden = true; return; }
  var profile = 'https://www.instagram.com/' + f.username + '/';
  function n(x) { return x.toLocaleString('pt-PT'); }
  function out(a, url) { a.href = url || profile; a.target = '_blank'; a.rel = 'noopener'; }
  document.getElementById('igAvatar').src = f.avatar;
  document.getElementById('igUser').textContent = f.username;
  document.getElementById('igName').textContent = f.name;
  document.getElementById('igPosts').textContent = n(f.posts);
  document.getElementById('igFollowers').textContent = n(f.followers);
  document.getElementById('igFollowing').textContent = n(f.following);
  document.getElementById('igBio').textContent = f.bio;
  var site = document.getElementById('igSite'); site.querySelector('span').textContent = f.site; out(site, 'https://' + f.site);
  document.querySelectorAll('#igw [data-ig]').forEach(function (a) { out(a); });
  var icons = {
    reel: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6 6v6l5-3z"/></svg>',
    album: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M8 2h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM3 7h2v12h12v2H4a1 1 0 0 1-1-1z"/></svg>'
  };
  var grid = document.getElementById('igGrid');
  f.items.forEach(function (p) {
    var a = document.createElement('a'); out(a, p.url); a.dataset.type = p.type;
    a.setAttribute('aria-label', p.alt + ', ver no Instagram');
    a.innerHTML = '<img loading="lazy" alt="">' + (p.badge !== false && icons[p.type] ? icons[p.type] : '');
    a.querySelector('img').src = p.img;
    grid.appendChild(a);
  });
  var more = document.getElementById('igMore');
  more.addEventListener('click', function () { grid.classList.remove('short'); more.hidden = true; });
  var tabs = document.getElementById('igTabs');
  tabs.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    tabs.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); });
    grid.querySelectorAll('a').forEach(function (a) { a.hidden = b.dataset.t !== 'all' && a.dataset.type !== b.dataset.t; });
  });
})();
