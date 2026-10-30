export default function Chef() {
  return (
    <section className="chef" id="chef" aria-labelledby="chef-title">
      <h2 className="sec-title sec-title--sm" id="chef-title" data-i18n="nav.chef">O Chef</h2>
      <p className="statement" data-i18n="chef.statement">Foi dos primeiros a brincar com a cozinha tradicional portuguesa, quando isso ainda era quase uma ofensa.</p>
      <div className="chef__grid">
        <figure className="chef__portrait plate">
          <img src="assets/img/MCS_site_base_home_2560x1400_pb-1980x1083.jpg" alt="Retrato de Miguel Castro e Silva, a preto e branco, de jaleca" loading="lazy" />
        </figure>
        <div className="chef__text">
          <p className="fade" data-i18n="chef.p1">Antes da cozinha esteve a música: piano, depois baixo, depois técnico de som. Estudou Biologia na Alemanha, onde fazia uns extras em restaurantes para compor o sustento. De volta ao Porto, foi diretor de produto no têxtil.</p>
          <p className="fade" data-i18n="chef.p2">Em 1992, num volte-face, abre o primeiro restaurante na Maia. Seguem-se o Restaurante do Miguel, na Foz, e o Bull &amp; Bear, no edifício da Bolsa, onde consolida a reputação dentro e fora do país.</p>
          <p className="fade" data-i18n="chef.p3">Hoje é consultor, autor e a assinatura por trás de casas em Lisboa, Porto, Gaia e no Douro. Representou Portugal em Hong Kong, Xangai, Paris, Bordéus, Bruxelas, Budapeste e São Paulo.</p>
        </div>
      </div>
      <dl className="facts">
        <div className="fact fade"><dt><span className="count" data-to={35}>35</span></dt><dd data-i18n="facts.years">anos de cozinha</dd></div>
        <div className="fact fade"><dt><span className="count" data-to={3}>3</span></dt><dd data-i18n="facts.books">livros publicados</dd></div>
        <div className="fact fade"><dt>2000</dt><dd data-i18n="facts.chef">Cozinheiro do Ano · Academia Portuguesa de Gastronomia</dd></div>
        <div className="fact fade"><dt>2017</dt><dd data-i18n="facts.award">Prémio de carreira David Lopes Ramos · Revista de Vinhos</dd></div>
      </dl>
    </section>
  );
}
