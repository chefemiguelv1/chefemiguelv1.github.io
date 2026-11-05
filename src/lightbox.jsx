import { createContext, useCallback, useContext, useEffect, useState } from 'react';

// One enlarged view for the whole page: photos (dishes, gallery) and films.
const LightboxContext = createContext(() => {});
export const useLightbox = () => useContext(LightboxContext);

export function LightboxProvider({ children }) {
  const [state, setState] = useState(null); // { items, at }
  const open = useCallback((items, at) => setState({ items, at }), []);
  const close = () => setState(null);
  const step = (d) => setState((s) => ({ ...s, at: (s.at + d + s.items.length) % s.items.length }));

  useEffect(() => {
    document.body.classList.toggle('locked', !!state);
    if (!state) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [state]);

  const it = state && state.items[state.at];
  return (
    <LightboxContext.Provider value={open}>
      {children}
      <div className={'lb' + (state ? ' open' : '')} aria-hidden={!state} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
        <button className="lb__x" type="button" onClick={close}>Fechar ✕</button>
        {state && state.items.length > 1 && <button className="lb__p" type="button" aria-label="Anterior" onClick={() => step(-1)}>←</button>}
        {it && (it.video
          ? <div className="lb__film"><iframe src={'https://www.youtube-nocookie.com/embed/' + it.video + '?autoplay=1&rel=0'} title={it.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>
          : <img src={it.img} alt={it.title || ''} />)}
        {state && state.items.length > 1 && <button className="lb__n" type="button" aria-label="Seguinte" onClick={() => step(1)}>→</button>}
        <div className="lb__cap"><b>{it && it.title}</b><span>{it && it.place}</span></div>
      </div>
    </LightboxContext.Provider>
  );
}
