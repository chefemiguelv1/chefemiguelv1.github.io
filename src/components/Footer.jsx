export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot__badge">
        <a className="etiqueta-mawebs" href="https://mawebs.com" target="_blank" rel="noopener" aria-label="Site feito pela MA Webs, mawebs.com">
          <span className="etiqueta-mawebs__nome">MA Webs</span>
          <span className="etiqueta-mawebs__local" data-i18n="foot.mawebs">Feito à mão em Mafra</span>
        </a>
      </div>
      <div className="foot__side">
        <a className="foot__up" href="#top" aria-label="Voltar ao topo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V4M5 11l7-7 7 7" /></svg></a>
        <a className="foot__word" href="#top"><img src="assets/img/logo.png" alt="" width={44} height={44} /><span>Miguel Castro e Silva</span></a>
      </div>
      <div className="foot__main">
        <div className="foot__cols">
          <div className="foot__col">
            <h4 data-i18n="nav.contact">Contactos</h4>
            <p>Miguel Castro e Silva</p>
            <p data-i18n="foot.role">Cozinheiro e consultor</p>
            <a href="#contactos" data-i18n="foot.write">Enviar mensagem</a>
          </div>
          <div className="foot__col">
            <h4 data-i18n="nav.projects">Restaurantes</h4>
            <a href="https://www.timeoutmarket.com/lisboa/" target="_blank" rel="noopener">Time Out Market</a>
            <a href="https://www.grancruzhouse.pt/restaurant" target="_blank" rel="noopener">Casario</a>
            <a href="https://www.espacoportocruz.pt/espaco/restaurante-decastro-gaia" target="_blank" rel="noopener">deCastro Gaia</a>
            <a href="https://hotel.quintadeventozelo.pt/cantina" target="_blank" rel="noopener">Cantina de Ventozelo</a>
          </div>
          <div className="foot__col">
            <h4 data-i18n="foot.hChef">O Chef</h4>
            <a href="#chef" data-i18n="foot.bio">Biografia</a>
            <a href="#percurso" data-i18n="nav.path">Percurso</a>
            <a href="#pratos" data-i18n="nav.dishes">Pratos</a>
            <a href="#livros" data-i18n="nav.books">Livros</a>
            <a href="#imprensa" data-i18n="nav.press">Imprensa</a>
          </div>
          <div className="foot__col">
            <h4 data-i18n="foot.hLegal">Informação legal</h4>
            <a href="privacidade.html" data-i18n="foot.privacy">Política de privacidade</a>
            <a href="cookies.html" data-i18n="foot.cookies">Política de cookies</a>
            <a href="termos.html" data-i18n="foot.terms">Termos de utilização</a>
            <a href="termos.html#litigios" data-i18n="foot.disputes">Resolução de litígios</a>
            <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener" data-i18n="foot.complaints">Livro de Reclamações</a>
          </div>
          <div className="foot__col">
            <h4 data-i18n="foot.hFollow">Seguir</h4>
            <a href="https://www.instagram.com/chef_castrosilvamiguel/" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
      </div>
      <div className="foot__credit">
        <p data-i18n="foot.rights">© 2026 Miguel Castro e Silva. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
