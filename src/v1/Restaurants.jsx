import { useEffect, useRef, useState } from 'react';
import { HOUSES } from '../data/houses.js';
import { COLLAB } from '../data/content.js';
import { useLightbox } from '../lightbox.jsx';

// Each restaurant with the dishes that were born there.
// Picking a house (here or in the menu) shows its dishes below.
export default function Restaurants() {
  const [id, setId] = useState('casario');
  const track = useRef(null);
  const plates = useRef(null);
  // show a house; if its dishes are off screen (e.g. on a phone), bring them into view
  const pick = (next) => {
    setId(next);
    const r = plates.current && plates.current.getBoundingClientRect();
    if (r && (r.top < 0 || r.top > innerHeight * .6)) plates.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const open = useLightbox();
  const house = HOUSES.find((h) => h.id === id);

  useEffect(() => {
    const onPick = (e) => setId(e.detail);
    addEventListener('pick-house', onPick);
    return () => removeEventListener('pick-house', onPick);
  }, []);
  useEffect(() => { if (track.current) track.current.scrollLeft = 0; }, [id]);

  const move = (d) => {
    const t = track.current, first = t && t.querySelector('.dish');
    if (first) t.scrollBy({ left: (first.offsetWidth + 16) * d, behavior: 'smooth' });
  };
  const place = house.name + ' · ' + house.place;
  const items = house.dishes.map((d) => ({ img: d.img, title: d.name, place }));

  const Card = ({ h }) => (
    <button className={'house' + (h.id === id ? ' on' : '') + (h.group === 'archive' ? ' house--old' : '')} type="button" onClick={() => pick(h.id)}>
      <div className="house__img"><img src={h.cover} alt="" loading="lazy" /></div>
      <h3>{h.name}</h3>
      <p>{h.place}{h.years ? ' · ' + h.years : ''}</p>
      <small>{h.text}</small>
    </button>
  );

  return (
    <section className="projects" id="restaurantes">
      <div className="head">
        <div><p className="label">Restaurantes</p><h2 className="title">Onde se come <em>hoje</em></h2></div>
        <p className="head__aside">Escolha uma casa para ver os pratos que nasceram lá.</p>
      </div>
      <div className="houses">
        {HOUSES.filter((h) => h.group === 'now').map((h) => <Card key={h.id} h={h} />)}
      </div>

      <div className="plates" ref={plates}>
        <div className="plates__head">
          <h3>À mesa · <span>{house.name}</span></h3>
          <div className="plates__right">
            {house.link && <a className="plates__book" href={house.link} target="_blank" rel="noopener">Reservar mesa ↗</a>}
            <div className="arrows"><button type="button" aria-label="Anterior" onClick={() => move(-1)}>←</button><button type="button" aria-label="Seguinte" onClick={() => move(1)}>→</button></div>
          </div>
        </div>
        <div className="track on" ref={track} key={id}>
          {house.dishes.map((d, i) => (
            <figure className="dish" key={d.img} onClick={() => open(items, i)}>
              <img src={d.img} alt={d.name} loading="lazy" />
              {d.name && <figcaption>{d.name}</figcaption>}
            </figure>
          ))}
        </div>
      </div>

      <div className="archive">
        <p className="label">Antes</p>
        <div className="houses houses--old">
          {HOUSES.filter((h) => h.group === 'archive').map((h) => <Card key={h.id} h={h} />)}
        </div>
      </div>

      <div className="collab">
        <p className="label">Colaborações</p>
        <ul>{COLLAB.map((c) => <li key={c.b}><b>{c.b}</b><span>{c.s}</span></li>)}</ul>
      </div>
    </section>
  );
}
