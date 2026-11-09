import { useEffect, useState } from 'react';
import { HOUSES } from '../data/houses.js';
import { BOOKS, INSTAGRAM } from '../data/content.js';

const Chevron = ({ w = 1.8 }) => (
  <svg viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth={w} /></svg>
);
const CURRENT = HOUSES.filter((h) => h.group === 'now');


function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const shut = () => setOpen(false);
    document.addEventListener('click', shut);
    return () => document.removeEventListener('click', shut);
  }, []);
  const hover = typeof matchMedia !== 'undefined' && matchMedia('(hover: hover)').matches;
  return (
    <div className={'dd' + (open ? ' open' : '')}
      onMouseEnter={hover ? () => setOpen(true) : undefined}
      onMouseLeave={hover ? () => setOpen(false) : undefined}>
      <button className="dd__btn" type="button" aria-expanded={open}
        onClick={(e) => { e.stopPropagation(); setOpen(!open); }}>{label} <Chevron /></button>
      <div className="dd__menu" onClick={() => setOpen(false)}>{children}</div>
    </div>
  );
}

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [menu, setMenu] = useState(false);
  const [sub, setSub] = useState(null);
  const [lang, setLang] = useState('pt');

  useEffect(() => {
    // the page can change (home or a restaurant), so look for its hero each time
    const onScroll = () => { const hero = document.querySelector('.hero'); setSolid(scrollY > (hero ? hero.offsetHeight : 600) - 90); };
    addEventListener('scroll', onScroll, { passive: true }); addEventListener('hashchange', onScroll); onScroll();
    return () => { removeEventListener('scroll', onScroll); removeEventListener('hashchange', onScroll); };
  }, []);
  useEffect(() => {
    document.body.classList.toggle('locked', menu);
    const onKey = (e) => { if (e.key === 'Escape') setMenu(false); };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [menu]);

  const Lang = () => (
    <div className="lang" role="group" aria-label="Língua">
      {['pt', 'en'].map((l) => <button key={l} type="button" lang={l} className={lang === l ? 'on' : ''} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
    </div>
  );
  const close = () => setMenu(false);

  return (
    <>
      <header className={'bar' + (solid ? ' solid' : '')}>
        <a className="bar__mark" href="#top"><img className="bar__logo" src="assets/img/logo.png" alt="" width="36" height="36" /><b>Miguel Castro e Silva</b></a>
        <div className="bar__right">
          <nav className="bar__nav">
            <a href="#chef">O Chef</a>
            <Dropdown label="Restaurantes">
              {CURRENT.map((h) => <a key={h.id} href={'#/' + h.id}>{h.name}<small>{h.place}</small></a>)}
            </Dropdown>
            <a href="#percurso">Percurso</a>
            <a href="#vinhos">Vinhos</a>
            <Dropdown label="Livros">
              {BOOKS.map((b) => <a key={b.id} href={'#' + b.id}>{b.title}<small>{b.year}</small></a>)}
            </Dropdown>
            <a href="#imprensa">Imprensa</a>
            <a href="#galeria">Galeria</a>
            <a href="#contactos">Contactos</a>
          </nav>
          <Lang />
          <button className="bar__burger" type="button" aria-expanded={menu} onClick={() => setMenu(true)}>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M0 1h20M0 7h20M0 13h20" /></svg><span>Menu</span>
          </button>
        </div>
      </header>

      <div className={'mnav' + (menu ? ' open' : '')} aria-hidden={!menu}>
        <div className="mnav__top">
          <span className="bar__mark"><img className="bar__logo" src="assets/img/logo.png" alt="" width="36" height="36" /><b>Miguel Castro e Silva</b></span>
          <button className="mnav__close" type="button" onClick={close}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 2l12 12M14 2L2 14" /></svg>Fechar
          </button>
        </div>
        <nav className="mnav__list">
          <a href="#chef" onClick={close}>O Chef</a>
          <div className={'mnav__sub' + (sub === 'r' ? ' open' : '')}>
            <button type="button" onClick={() => setSub(sub === 'r' ? null : 'r')}>Restaurantes <Chevron w={1.6} /></button>
            <div>{CURRENT.map((h) => <a key={h.id} href={'#/' + h.id} onClick={close}>{h.name}</a>)}</div>
          </div>
          <a href="#percurso" onClick={close}>Percurso</a>
          <a href="#vinhos" onClick={close}>Vinhos</a>
          <div className={'mnav__sub' + (sub === 'l' ? ' open' : '')}>
            <button type="button" onClick={() => setSub(sub === 'l' ? null : 'l')}>Livros <Chevron w={1.6} /></button>
            <div>{BOOKS.map((b) => <a key={b.id} href={'#' + b.id} onClick={close}>{b.title}</a>)}</div>
          </div>
          <a href="#imprensa" onClick={close}>Imprensa</a>
          <a href="#galeria" onClick={close}>Galeria</a>
          <a href="#contactos" onClick={close}>Contactos</a>
        </nav>
        <div className="mnav__foot"><a href={INSTAGRAM} target="_blank" rel="noopener">Instagram</a></div>
      </div>
    </>
  );
}
