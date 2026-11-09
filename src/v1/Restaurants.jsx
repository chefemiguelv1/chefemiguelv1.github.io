import { HOUSES } from '../data/houses.js';
import { COLLAB } from '../data/content.js';

// The restaurants on the home page. Each card opens that house's own page (#/id).
export default function Restaurants() {
  const Card = ({ h }) => (
    <a className={'house' + (h.group !== 'now' ? ' house--old' : '')} href={'#/' + h.id}>
      <div className="house__img"><img src={h.cover} alt="" loading="lazy" /></div>
      <h3>{h.name}</h3>
      <p>{h.place}{h.years ? ' · ' + h.years : ''}</p>
      <small>{h.text}</small>
      <span className="house__go">Ver restaurante →</span>
    </a>
  );

  return (
    <section className="projects" id="restaurantes">
      <div className="head">
        <div><p className="label">Restaurantes</p><h2 className="title">Onde se come <em>hoje</em></h2></div>
        <p className="head__aside">Escolha uma casa para conhecer o espaço, a história e os pratos.</p>
      </div>
      <div className="houses">
        {HOUSES.filter((h) => h.group === 'now').map((h) => <Card key={h.id} h={h} />)}
      </div>

      <div className="archive">
        <p className="label">Outros projetos e casas anteriores</p>
        <div className="houses houses--old">
          {HOUSES.filter((h) => h.group !== 'now').map((h) => <Card key={h.id} h={h} />)}
        </div>
      </div>

      <div className="collab">
        <p className="label">Colaborações</p>
        <ul>{COLLAB.map((c) => <li key={c.b}><b>{c.b}</b><span>{c.s}</span></li>)}</ul>
      </div>
    </section>
  );
}
