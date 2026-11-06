import { WINES, WINES_INTRO } from '../data/wines.js';
import { useLightbox } from '../lightbox.jsx';

// Wines: one of Miguel's continuous projects, blends under his own label.
export default function Wines() {
  const open = useLightbox();
  const items = WINES.map((w) => ({ img: w.img, title: w.name, place: w.region }));
  return (
    <section className="wines" id="vinhos">
      <div className="head">
        <div><p className="label">Vinhos</p><h2 className="title">Lotes com a <em>sua assinatura</em></h2></div>
      </div>
      <div className="wines__top">
        <img src={WINES_INTRO.img} alt="Os vinhos de Miguel Castro e Silva" loading="lazy" />
        <blockquote className="wines__quote">“{WINES_INTRO.quote}”<cite>Miguel Castro e Silva</cite></blockquote>
      </div>
      <div className="wines__list">
        {WINES.map((w, i) => (
          <article className="wine" key={w.name}>
            <button type="button" className="wine__img" onClick={() => open(items, i)} aria-label={w.name}>
              <img src={w.img} alt="" loading="lazy" />
            </button>
            <p className="wine__region">{w.region}</p>
            <h3>{w.name}</h3>
            <p className="wine__text">{w.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
