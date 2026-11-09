import { useState } from 'react';
import { HOUSES } from '../data/houses.js';
import { HOUSE_PAGES } from '../data/housePages.js';
import { useLightbox } from '../lightbox.jsx';

const KIND = { now: 'Restaurante', project: 'Projeto', archive: 'Casa anterior' };

// A page for each restaurant (#/id), the same layout for all of them:
// intro with photo and buttons, the dishes in circles, the story, where it is, the space.
export default function HousePage({ id }) {
  const open = useLightbox();
  const [all, setAll] = useState(false);
  const h = HOUSES.find((x) => x.id === id);
  const p = HOUSE_PAGES[id] || { about: [h.text], facts: [], spaces: [] };
  const now = h.group === 'now';
  const place = h.name + ' · ' + h.place;

  // named dishes first, so the four on show always have a name under them
  const sorted = [...h.dishes.filter((d) => d.name), ...h.dishes.filter((d) => !d.name)];
  const shown = all ? sorted : sorted.slice(0, 4);
  const plates = sorted.map((d) => ({ img: d.img, title: d.name, place }));
  const spaces = p.spaces.map((img) => ({ img, title: h.name, place: h.place }));
  const storyImg = p.spaces[0] || (sorted[4] || sorted[0]).img;
  const address = (p.facts.find(([k]) => k === 'Morada') || [])[1];
  const others = HOUSES.filter((x) => x.id !== id && (x.group === 'now') === now);

  const toDishes = () => document.getElementById('pratos').scrollIntoView({ behavior: 'smooth' });
  const Book = () => h.link
    ? <a className="hpb hpb--dark" href={h.link} target="_blank" rel="noopener">{now ? 'Reservar mesa' : 'Visitar site'} ↗</a>
    : null;

  return (
    <article className="hp">
      <section className="hero hp__hero">
        <img className="hero__img" src={h.cover} alt={h.name} />
        <p className="label">{KIND[h.group]} · {h.place}{h.years ? ' · ' + h.years : ''}</p>
        <h1>{h.name}</h1>
        <div className="hp__btns">
          {h.link && <a className="hpb hpb--light" href={h.link} target="_blank" rel="noopener">{now ? 'Reservar mesa' : 'Visitar site'} ↗</a>}
          <button className="hpb hpb--ghost" onClick={toDishes}>Ver pratos</button>
        </div>
      </section>

      <section className="hp__menu" id="pratos">
        <h2>Pratos</h2>
        <p className="hp__note">{now ? 'Alguns dos pratos que se servem na casa.' : 'Alguns dos pratos que marcaram a casa.'}</p>
        <div className="hp__plates">
          {shown.map((d, i) => (
            <figure key={d.img} onClick={() => open(plates, i)}>
              <img src={d.img} alt={d.name || h.name} loading="lazy" />
              {d.name && <figcaption>{d.name}</figcaption>}
            </figure>
          ))}
        </div>
        {sorted.length > 4 && (
          <button className="hpb hp__all" onClick={() => setAll(!all)}>
            {all ? 'Mostrar menos' : 'Ver todos os pratos (' + sorted.length + ')'}
          </button>
        )}
      </section>

      <section className="hp__story">
        <img src={storyImg} alt={h.name} loading="lazy" onClick={() => spaces.length && open(spaces, 0)} />
        <div>
          {p.lead && <h2>{p.lead}</h2>}
          {p.about.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
          {p.quote && <blockquote>“{p.quote}”<cite>Miguel Castro e Silva</cite></blockquote>}
          <div className="hp__btns">
            <Book />
            {address && <a className="hpb" href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address)} target="_blank" rel="noopener">Como chegar ↗</a>}
          </div>
        </div>
      </section>

      {p.facts.length > 0 && (
        <section className="hp__info">
          <h2>{now ? 'Morada e reservas' : 'A casa'}</h2>
          <dl>
            {p.facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{k === 'Telefone' ? <a href={'tel:' + v.replace(/\s/g, '')}>{v}</a> : k === 'Email' ? <a href={'mailto:' + v}>{v}</a> : v}</dd></div>
            ))}
          </dl>
        </section>
      )}

      {spaces.length > 1 && (
        <section className="hp__space">
          <h2>O espaço</h2>
          <div className="hp__strip">
            {spaces.slice(0, 4).map((s, i) => <img key={s.img} src={s.img} alt={h.name} loading="lazy" onClick={() => open(spaces, i)} />)}
          </div>
        </section>
      )}

      <section className="hp__next">
        <h2>{now ? 'Outros restaurantes' : 'Outras casas e projetos'}</h2>
        <div className="hp__others">
          {others.map((o) => (
            <a key={o.id} href={'#/' + o.id}>
              <img src={o.cover} alt="" loading="lazy" />
              <b>{o.name}</b><span>{o.place}</span>
            </a>
          ))}
        </div>
      </section>
    </article>
  );
}
