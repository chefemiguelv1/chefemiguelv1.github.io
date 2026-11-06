// Texts follow the biography and pages of miguelcastrosilva.com, to be reviewed with Miguel.
const A = 'assets/img/';
const P = 'assets/imprensa/';
const q = (s) => 'https://www.google.com/search?q=' + encodeURIComponent(s);

export const TIMELINE = [
  { y: '1992', t: 'Quinta dos Vales', where: 'Maia', p: 'O primeiro restaurante, numa quinta rústica nos arredores do Porto.', img: A + 'MCS_restaurantes_01-0x0.jpg' },
  { y: '1994', t: 'Restaurante do Miguel', where: 'Foz do Porto', p: 'Um dos 12 melhores restaurantes do país para a revista Exame. Começam os jantares vínicos com Dirk Niepoort, Luís Pato e Ricardo Nicolau de Almeida.', img: A + 'MCS_site_livro_na_cozinha_1200x700-0x0.jpg' },
  { y: '1997', t: 'Bull & Bear', where: 'Porto · até 2008', p: 'No edifício da Bolsa. Garfo de Ouro, três Sóis Repsol e um dos 25 melhores da Europa para o Financial Times. Abre também o Café-Concerto do Teatro Rivoli.', img: A + 'restaurantes/bull-bear.jpg' },
  { y: '2001', t: 'Cozinheiro do Ano', where: 'Porto · Paris', p: 'Cozinheiro do Ano 2000 pela Academia Portuguesa de Gastronomia. Publica “Uma Cozinha de Aromas” e dá aulas na escola Ferrandi, em Paris.' },
  { y: '2004', t: 'Xangai e IWWC', where: 'China · Portugal', p: 'Prepara em Xangai o jantar oferecido pela Presidência da República. Primeiro lugar entre os dez chefs de referência em Portugal no International Who’s Who of Chefs.' },
  { y: '2005', t: 'Serralves e Romaneira', where: 'Porto · Douro', p: 'Consultor na Fundação de Serralves e na abertura da Quinta da Romaneira, até 2007.', img: A + 'MCS_Ideias_Soltas_2560x1400_01-1980x1083.jpg' },
  { y: '2007', t: 'Larousse e bbGourmet', where: 'Porto', p: 'Três receitas no Larousse Gastronomique. Abre o bbGourmet, dedicado aos petiscos portugueses.' },
  { y: '2009', t: 'deCastro', where: 'Lisboa · até 2014', p: 'Muda-se para Lisboa e abre o deCastro, nas Avenidas Novas, dedicado aos petiscos.', img: A + 'deCastro_01-1980x1083.jpg' },
  { y: '2010', t: 'Largo', where: 'Chiado, Lisboa · até 2015', p: 'Chef do Largo, nos antigos claustros do Convento da Igreja dos Mártires.', img: A + 'casas/largo/Largo_001.jpg' },
  { y: '2012', t: 'deCastro Gaia', where: 'Vila Nova de Gaia', p: 'A convite de Jorge Dias, da Gran Cruz, abre o deCastro Gaia no Espaço Porto Cruz.', img: A + 'restaurantes/decastro-gaia.jpg' },
  { y: '2014', t: 'Time Out Market', where: 'Lisboa', p: 'Abre o espaço com o seu nome no Mercado da Ribeira e, em dezembro, o deCastro Flores.', img: A + 'casas/time-out-market/MCS_Mercado_TO_2025_01.jpg' },
  { y: '2015', t: 'Less', where: 'Príncipe Real, Lisboa · até 2019', p: 'Cozinha elaborada q.b., em ambiente informal, na Embaixada. Consultor na Fundação Gulbenkian.', img: A + 'casas/less/MCS_LESS_05.jpg' },
  { y: '2016', t: 'Na Cozinha de Miguel Castro e Silva', where: 'Livro', p: '48 ingredientes da cozinha portuguesa revisitados, com Augusto Freitas de Sousa.' },
  { y: '2017', t: 'Prémio David Lopes Ramos', where: 'Revista de Vinhos', p: 'Prémio de gastronomia na 20.ª edição de “Os Melhores do Ano”.' },
  { y: '2018', t: 'Casario', where: 'Ribeira, Porto', p: 'Abre o Casario, na Gran Cruz House, a quatro mãos com José Guedes.', img: A + 'restaurantes/casario.webp' },
  { y: '2019', t: 'Cantina de Ventozelo', where: 'Douro', p: 'Na Quinta de Ventozelo, recupera a cozinha tradicional da região, de proximidade e sustentável.', img: A + 'restaurantes/cantina-ventozelo.jpg' }
];

export const BOOKS = [
  { id: 'l-aromas', title: 'Uma Cozinha de Aromas', year: '2001', img: A + 'Livro_uma_cozinha_de_aromas_capa-1.jpg', note: 'Com José Nogueira Gil. Editora Civilização. Esgotado.', buy: q('Uma Cozinha de Aromas Miguel Castro e Silva livro') },
  { id: 'l-food', title: 'The Food & Cooking of Portugal', year: '2007', img: A + 'Livro_The_Food_and_cooking_Portugal_CAPA.jpg', note: '65 receitas de norte a sul. Lorenz Books, Londres.', buy: q('Recipes from My Portuguese Kitchen Miguel Castro e Silva 9781908991072') },
  { id: 'l-cozinha', title: 'Na Cozinha de Miguel Castro e Silva', year: '2016', img: A + 'Livro_Na_cozinha_de_MCS_CAPA.jpg', note: 'Com Augusto Freitas de Sousa. Fotografias de Jorge Simão.', buy: q('Na Cozinha de Miguel Castro e Silva Lua de Papel livro') }
];

export const AWARDS = [
  { y: '2000', t: 'Cozinheiro do Ano', s: 'Academia Portuguesa de Gastronomia' },
  { y: '2003', t: 'Garfo de Ouro', s: 'Expresso · Bull & Bear' },
  { y: '2004', t: 'Três Sóis Repsol', s: 'Bull & Bear' },
  { y: '2004', t: '25 melhores restaurantes da Europa', s: 'Financial Times · Bull & Bear' },
  { y: '2004', t: '1.º lugar entre os chefs de referência em Portugal', s: 'International Who’s Who of Chefs' },
  { y: '2017', t: 'Prémio de gastronomia David Lopes Ramos', s: 'Revista de Vinhos' },
  { y: '2023', t: 'Estatuto PME Líder', s: 'Turismo de Portugal e IAPMEI' }
];

// Each clipping opens the article: the PDF from his site, the page online, or a search.
export const CLIPS = [
  { img: A + 'imprensa_time_out_largo.jpg', name: 'Time Out · 2010', url: 'https://www.timeout.pt/lisboa/pt/restaurantes/largo' },
  { img: A + 'imprensa_evasoes_de_castro.jpg', name: 'Evasões · 2014', url: P + 'Evasoes_2014.pdf' },
  { img: A + 'imprensa_visao_natal.jpg', name: 'Visão · 2016', url: P + 'VISAO_Natal-2016.pdf' },
  { img: A + 'imprensa_observador_entrevista.jpg', name: 'Observador · 2017', url: 'https://observador.pt/especiais/miguel-castro-e-silva-a-profissao-de-cozinheiro-estava-socialmente-abaixo-do-pedreiro/' },
  { img: A + 'imprensa_publico_cantina.jpg', name: 'Público · 2019', url: P + 'Cantina_publico.pdf' },
  { img: A + 'imprensa_revista_vinhos_ventozelo.jpg', name: 'Revista de Vinhos · 2019', url: P + 'Ventozelo_Revista_vinhos.pdf' },
  { img: A + 'imprensa_fugas_ventozelo.jpg', name: 'Fugas · 2020', url: P + 'Fugas-20200215.pdf' },
  { img: A + 'imprensa_attitude_93_ventozelo.jpg', name: 'Attitude · 2020', url: P + 'ATTITUDE-93_176_novo-4_Ventozelo.pdf' },
  { img: A + 'imprensa_fugas_casario.jpg', name: 'Fugas · 2023', url: P + 'Casario_Fugas.pdf' },
  { img: A + 'imprensa_time_out_casario.jpg', name: 'Time Out · Casario', url: q('Time Out Casario Miguel Castro e Silva') }
];

export const COLLAB = [
  { b: 'Gran Cruz', s: 'Casario, deCastro Gaia e Quinta de Ventozelo' },
  { b: 'Fundação de Serralves', s: 'Consultor, 2005 a 2007' },
  { b: 'Fundação Gulbenkian', s: 'Consultor' },
  { b: 'Sonae e Itaú', s: 'Consultoria industrial e hospitalar' },
  { b: 'Vista Alegre', s: 'Coleção de pratos desenhada em parceria' },
  { b: 'Larousse Gastronomique', s: 'Três receitas publicadas' }
];

export const INSTAGRAM = 'https://www.instagram.com/chef_castrosilvamiguel/';
