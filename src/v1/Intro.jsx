// Hero and the chef's biography.
export function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src="assets/img/MCS_projetos-0x0.jpg" alt="Miguel Castro e Silva a empratar" />
      <p className="label">Cozinheiro · Porto, 1961</p>
      <h1>Cozinha portuguesa com alma.</h1>
      <div className="hero__row">
        <p className="hero__lede">Do Porto ao Douro, de Lisboa ao mundo, há mais de trinta anos.</p>
        <a className="btn" href="#restaurantes">Ver os restaurantes</a>
      </div>
    </section>
  );
}

export function Chef() {
  return (
    <section className="chef" id="chef">
      <figure className="chef__photo">
        <img src="assets/img/MCS_site_base_home_2560x1400_pb-1980x1083.jpg" alt="Miguel Castro e Silva" />
        <figcaption>Miguel Castro e Silva, Porto</figcaption>
      </figure>
      <div>
        <p className="label">O Chef</p>
        <h2 className="statement">Chegou à cozinha depois da música, da biologia e da indústria têxtil. <em>Nunca mais saiu dela.</em></h2>
        <div className="chef__text">
          <p>Miguel Castro e Silva nasceu no Porto em 1961. Antes de cozinhar tocou piano, depois baixo, e trabalhou alguns anos como técnico de som. Foi estudar Biologia para a Alemanha, curso que deixou a meio, e pagou as contas com turnos em restaurantes. De regresso ao Porto, passou pela indústria têxtil como diretor de produto.</p>
          <p>Em 1992 mudou de vida e abriu o primeiro restaurante, numa quinta da Maia. Dois anos depois chegou à Foz com o Restaurante do Miguel e, em 1997, ao edifício da Bolsa, com o Bull &amp; Bear.</p>
          <p>Foi dos primeiros a mexer no receituário português quando isso ainda soava a desrespeito, e dos primeiros no país a cozinhar a baixa temperatura. Deu aulas na escola Ferrandi, em Paris, tem três receitas no Larousse Gastronomique e cozinhou por Portugal na China, em França, na Bélgica, na Hungria e no Brasil.</p>
          <p>Em 2009 mudou-se para Lisboa, onde abriu o deCastro e esteve à frente do Largo e do Less. Hoje a sua cozinha está no Casario, no deCastro Gaia, no Time Out Market e na Cantina de Ventozelo.</p>
        </div>
        <div className="facts">
          <div><b>1992</b><span>Primeiro restaurante</span></div>
          <div><b>4</b><span>Casas abertas hoje</span></div>
          <div><b>3</b><span>Livros publicados</span></div>
          <div><b>2017</b><span>Prémio de carreira</span></div>
        </div>
      </div>
    </section>
  );
}
