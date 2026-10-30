export default function Lightbox() {
  return (
    <div className="lb" id="lb" hidden role="dialog" aria-modal="true" aria-label="Visualizador">
      <button className="lb__close" type="button" id="lb-close" aria-label="Fechar"><svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19" /></svg></button>
      <button className="lb__nav lb__nav--prev" type="button" id="lb-prev" aria-label="Anterior"><svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8" /></svg></button>
      <button className="lb__nav lb__nav--next" type="button" id="lb-next" aria-label="Seguinte"><svg viewBox="0 0 24 24"><path d="M9 4l8 8-8 8" /></svg></button>
      <figure className="lb__stage"><div className="lb__frame" id="lb-frame" /><figcaption className="lb__cap" id="lb-cap" /></figure>
    </div>
  );
}
