import { useEffect, useRef, useState } from 'react';
import { TIMELINE, BOOKS, AWARDS, CLIPS } from '../data/content.js';
import { GALLERY, FILMS } from '../data/gallery.js';
import { useLightbox } from '../lightbox.jsx';

export function Path() {
  const [open, setOpen] = useState(false);
  const FIRST = 6;
  const list = open ? TIMELINE : TIMELINE.slice(0, FIRST);
  const toggle = () => {
    if (open) document.getElementById('percurso')?.scrollIntoView({ behavior: 'smooth' });
    setOpen(!open);
  };
  return (
    <section className="path" id="percurso">
      <div className="head"><div><p className="label">Percurso</p><h2 className="title">Do Porto para o <em>mundo</em></h2></div></div>
      <ul className={'path__list' + (open ? '' : ' is-short')}>
        {list.map((s) => (
          <li key={s.y + s.t}><b>{s.y}</b><h3>{s.t}<small>{s.where}</small></h3><p>{s.p}</p>{s.img ? <img src={s.img} alt="" loading="lazy" /> : <span />}</li>
        ))}
      </ul>
      <div className="path__more">
        <button type="button" onClick={toggle} aria-expanded={open}>
          {open ? 'Mostrar menos' : 'Ver percurso completo'} <span aria-hidden="true">{open ? '↑' : '↓'}</span>
        </button>
        {!open && <small>Mais {TIMELINE.length - FIRST} momentos, de {TIMELINE[FIRST].y} a {TIMELINE[TIMELINE.length - 1].y}</small>}
      </div>
    </section>
  );
}

export function Books() {
  return (
    <section className="books" id="livros">
      <div className="head"><div><p className="label">Livros</p><h2 className="title">A cozinha, <em>por escrito</em></h2></div></div>
      <div className="shelf">
        {BOOKS.map((b) => (
          <figure id={b.id} key={b.id}>
            <img src={b.img} alt={b.title} />
            <p className="y">{b.year}</p><h3>{b.title}</h3><p className="shelf__note">{b.note}</p>
            <a className="shelf__buy" href={b.buy} target="_blank" rel="noopener">Onde encontrar ↗</a>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Press() {
  return (
    <section className="press" id="imprensa">
      <div className="head"><div><p className="label">Imprensa</p><h2 className="title">Distinções <em>e media</em></h2></div></div>
      <div className="press__top">
        <blockquote>“Um dos chefs do momento na cidade.”<cite>Time Out Lisboa</cite></blockquote>
        <ul className="awards">
          {AWARDS.map((a) => <li key={a.y + a.t}><b>{a.y}</b><span>{a.t}<small>{a.s}</small></span></li>)}
        </ul>
      </div>
      <div className="clips">
        {CLIPS.map((c) => (
          <a key={c.name} href={c.url} target="_blank" rel="noopener"><figure><img src={c.img} alt={'Recorte: ' + c.name} /><figcaption>{c.name} ↗</figcaption></figure></a>
        ))}
      </div>
    </section>
  );
}

const TABS = [['all', 'Tudo'], ['pratos', 'Gastronomia'], ['espacos', 'Espaços'], ['momentos', 'Momentos'], ['videos', 'Vídeos']];

// Gallery: one clean strip of photos (all the same height, dragged sideways),
// then the films. The tabs choose what the strip shows.
export function Gallery() {
  const [f, setF] = useState('all');
  const open = useLightbox();
  const strip = useRef(null);
  const drag = useRef({ down: false, moved: false, x: 0, left: 0 });
  const photos = f === 'videos' ? [] : GALLERY.filter((g) => f === 'all' || g.c === f);
  const films = f === 'all' || f === 'videos' ? FILMS : [];
  const items = photos.map((g) => ({ img: g.img, title: g.cap.split(' · ')[0], place: g.cap.split(' · ')[1] || '' }));

  useEffect(() => { if (strip.current) strip.current.scrollLeft = 0; }, [f]);
  const move = (d) => strip.current && strip.current.scrollBy({ left: d * strip.current.clientWidth * .8, behavior: 'smooth' });
  // press and drag with a mouse; fingers and trackpads already scroll it
  const down = (e) => { if (e.pointerType !== 'mouse') return; drag.current = { down: true, moved: false, x: e.clientX, left: strip.current.scrollLeft }; };
  const over = (e) => {
    const d = drag.current; if (!d.down) return;
    const dx = e.clientX - d.x; if (!d.moved && Math.abs(dx) < 5) return;
    d.moved = true; strip.current.classList.add('is-dragging'); strip.current.scrollLeft = d.left - dx;
  };
  const up = () => { drag.current.down = false; strip.current && strip.current.classList.remove('is-dragging'); };
  const click = (i) => { if (drag.current.moved) { drag.current.moved = false; return; } open(items, i); };

  return (
    <section className="gallery" id="galeria">
      <div className="head">
        <div><p className="label">Galeria</p><h2 className="title">Pratos, espaços <em>e momentos</em></h2></div>
        <div className="tabs">
          {TABS.map(([k, t]) => <button key={k} type="button" className={f === k ? 'on' : ''} onClick={() => setF(k)}>{t}</button>)}
        </div>
      </div>
      {photos.length > 0 && (
        <div className="gstrip">
          <div className="gstrip__nav">
            <button type="button" aria-label="Anterior" onClick={() => move(-1)}>←</button>
            <button type="button" aria-label="Seguinte" onClick={() => move(1)}>→</button>
          </div>
          <div className="gstrip__track" ref={strip} onPointerDown={down} onPointerMove={over} onPointerUp={up} onPointerLeave={up}>
            {photos.map((g, i) => (
              <button type="button" key={g.img} className="gstrip__shot" onClick={() => click(i)} aria-label={g.cap}>
                <img src={g.img} alt="" loading="lazy" draggable="false" />
              </button>
            ))}
          </div>
        </div>
      )}
      {films.length > 0 && (
        <div className="films">
          {films.map((v) => (
            <button key={v.id} type="button" className="film" onClick={() => open([{ video: v.id, title: v.title }], 0)}>
              <span className="film__img"><img src={v.thumb} alt="" loading="lazy" /><i aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></i></span>
              <span className="film__t">{v.title}</span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
