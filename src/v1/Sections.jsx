import { useState } from 'react';
import { TIMELINE, BOOKS, AWARDS, CLIPS } from '../data/content.js';
import { GALLERY, FILMS } from '../data/gallery.js';
import { useLightbox } from '../lightbox.jsx';

export function Path() {
  return (
    <section className="path" id="percurso">
      <div className="head"><div><p className="label">Percurso</p><h2 className="title">Do Porto para o <em>mundo</em></h2></div></div>
      <ul className="path__list">
        {TIMELINE.map((s) => (
          <li key={s.y + s.t}><b>{s.y}</b><h3>{s.t}<small>{s.where}</small></h3><p>{s.p}</p><img src={s.img} alt="" loading="lazy" /></li>
        ))}
      </ul>
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
            <p className="y">{b.year}</p><h3>{b.title}</h3>
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

export function Gallery() {
  const [f, setF] = useState('all');
  const open = useLightbox();
  const photos = GALLERY.filter((g) => f === 'all' || g.c === f);
  const films = f === 'all' || f === 'videos' ? FILMS : [];
  const photoItems = photos.map((g) => ({ img: g.img, title: g.cap.split(' · ')[0], place: g.cap.split(' · ')[1] || '' }));

  return (
    <section className="gallery" id="galeria">
      <div className="head">
        <div><p className="label">Galeria</p><h2 className="title">Pratos, espaços <em>e momentos</em></h2></div>
        <div className="tabs">
          {TABS.map(([k, t]) => <button key={k} type="button" className={f === k ? 'on' : ''} onClick={() => setF(k)}>{t}</button>)}
        </div>
      </div>
      {photos.length > 0 && (
        <div className="grid">
          {photos.map((g, i) => (
            <figure key={g.img} className={g.wide ? 'wide' : ''} onClick={() => open(photoItems, i)}>
              <img src={g.img} alt={g.cap} loading="lazy" />
            </figure>
          ))}
        </div>
      )}
      {films.length > 0 && (
        <>
          {f === 'all' && <p className="label films__label">Vídeos</p>}
          <div className="films">
            {films.map((v) => (
              <button key={v.id} type="button" className="film" onClick={() => open([{ video: v.id, title: v.title }], 0)}>
                <span className="film__img"><img src={v.thumb} alt="" loading="lazy" /><i aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></i></span>
                <span className="film__t">{v.title}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
