export default function Restaurants() {
  return (
    <section className="projects" id="restaurantes" aria-labelledby="proj-title">
      <div className="sec-head sec-head--center">
        <h2 className="sec-title" id="proj-title" data-i18n="nav.projects">Restaurantes</h2>
      </div>
      <div className="restos" id="houses" />
      <div className="soon fade" id="soon" />
      <div className="archive">
        <h3 className="archive__title" data-i18n="proj.archive">Arquivo</h3>
        <ol className="archive__grid" id="index" />
      </div>
    </section>
  );
}
