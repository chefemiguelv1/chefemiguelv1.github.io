export default function Bar() {
  return (
    <header className="bar" id="bar">
      <a className="bar__mark" href="#top" aria-label="Miguel Castro e Silva, início">
        <img src="assets/img/logo.png" alt="" width={34} height={34} />
        <span>Miguel Castro e Silva</span>
      </a>
      <nav className="bar__nav" aria-label="Secções">
        <a href="#chef" data-i18n="nav.chef">O Chef</a>
        <a href="#percurso" data-i18n="nav.path">Percurso</a>
        <a href="#pratos" data-i18n="nav.dishes">Pratos</a>
        <a href="#restaurantes" data-i18n="nav.projects">Restaurantes</a>
        <a href="#livros" data-i18n="nav.books">Livros</a>
        <a href="#imprensa" data-i18n="nav.press">Imprensa</a>
        <a href="#galeria" data-i18n="nav.gallery">Galeria</a>
      </nav>
      <button className="bar__lang" type="button" id="lang" aria-label="Idioma / Language"><span className="is-on">PT</span>/<span>EN</span></button>
      <a className="bar__cta" href="#contactos" data-i18n="nav.contact">Contactos</a>
      <button className="bar__burger" type="button" id="burger" aria-label="Menu" aria-expanded="false"><i /><i /></button>
    </header>
  );
}
