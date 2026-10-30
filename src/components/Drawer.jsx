export default function Drawer() {
  return (
    <div className="drawer" id="drawer" hidden>
      <nav className="drawer__nav" aria-label="Menu">
        <a href="#chef" data-i18n="nav.chef">O Chef</a>
        <a href="#percurso" data-i18n="nav.path">Percurso</a>
        <a href="#pratos" data-i18n="nav.dishes">Pratos</a>
        <a href="#restaurantes" data-i18n="nav.projects">Restaurantes</a>
        <a href="#livros" data-i18n="nav.books">Livros</a>
        <a href="#imprensa" data-i18n="nav.press">Imprensa</a>
        <a href="#galeria" data-i18n="nav.gallery">Galeria</a>
        <a href="#contactos" data-i18n="nav.contact">Contactos</a>
      </nav>
      <div className="drawer__foot">
        <a href="https://www.instagram.com/chef_castrosilvamiguel/" target="_blank" rel="noopener">Instagram ↗</a>
        <span>Miguel Castro e Silva</span>
      </div>
    </div>
  );
}
