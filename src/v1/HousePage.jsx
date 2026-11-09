import { HOUSES } from '../data/houses.js';
import { HOUSE_PAGES } from '../data/housePages.js';
import { useLightbox } from '../lightbox.jsx';

const KIND = { now: 'Restaurante', project: 'Projeto', archive: 'Casa anterior' };

// A page for each restaurant (#/id): cover, story, details, the space and every dish.
export default function HousePage({ id }) {
  const open = useLightbox();
  const h = HOUSES.find((x) => x.id === id);
  const p = HOUSE_PAGES[id] || { about: [h.text], facts: [], spaces: [] };
  const place = h.name + ' · ' + h.place;
  const spaces = p.spaces.map((img) => ({ img, title: h.name, place: h.place }));
  const dishes = h.dishes.map((d) => ({ img: d.img, title: d.name, place }));
  const others = HOUSES.filter((x) => x.id !== id && (x.group === 'now') === (h.group === 'now'));

  return (
    <article className="hp" style={{ '--h': p.theme }}>
      <section className="hero hp__hero">
        <img className="hero__img" src={h.cover} alt={h.name} />
        <p className="hp__kind">{KIND[h.group]}{h.years ? ' · ' + h.years : ''}</p>
        <h1>{h.name}</h1>
        <p className="hp__place">{h.place}</p>
      </section>

      <section className="hp__intro">
        <div className="hp__story">
          <a className="hp__back" href="#restaurantes">← Todos os restaurantes</a>
          {p.lead && <h2>{p.lead}</h2>}
          {p.about.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
          {p.quote && <blockquote>“{p.quote}”<cite>Miguel Castro e Silva</cite></blockquote>}
        </div>
        <aside className="hp__card">
          {p.facts.map(([k, v]) => <div key={k}><span>{k}</span><p>{v}</p></div>)}
          {h.link && <a className="hp__book" href={h.link} target="_blank" rel="noopener">{h.group === 'now' ? 'Reservar mesa' : 'Visitar site'} ↗</a>}
        </aside>
      </section>

      {spaces.length > 0 && (
        <section className="hp__block">
          <p className="label">O espaço</p>
          <div className={'hp__spaces n' + Math.min(spaces.length, 3)}>
            {spaces.map((s, i) => <img key={s.img} src={s.img} alt={h.name} loading="lazy" onClick={() => open(spaces, i)} />)}
          </div>
        </section>
      )}

      <section className="hp__block">
        <p className="label">{h.group === 'now' ? 'À mesa' : 'Pratos'}</p>
        <div className="hp__dishes">
          {h.dishes.map((d, i) => (
            <figure key={d.img} onClick={() => open(dishes, i)}>
              <img src={d.img} alt={d.name || h.name} loading="lazy" />
              {d.name && <figcaption>{d.name}</figcaption>}
            </figure>
          ))}
        </div>
      </section>

      <section className="hp__next">
        <p className="label">{h.group === 'now' ? 'Outros restaurantes' : 'Outras casas e projetos'}</p>
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
