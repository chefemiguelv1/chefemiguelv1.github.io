export default function Path() {
  return (
    <section className="path" id="percurso" aria-labelledby="path-title">
      <div className="path__pin">
        <div className="path__head">
          <h2 className="sec-title" id="path-title" data-i18n="nav.path">Percurso</h2>
          <div className="path__bar"><i id="path-progress" /></div>
        </div>
        <div className="path__track" id="path-track" />
      </div>
    </section>
  );
}
