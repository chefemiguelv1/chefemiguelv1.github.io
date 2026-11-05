// Texts of the version Melody and Miguel reviewed (design v1), to be revised with them.
const A = 'assets/img/';
const q = (s) => 'https://www.google.com/search?q=' + encodeURIComponent(s);

export const TIMELINE = [
  { y: '1992', t: 'Quinta dos Vales', where: 'Maia', p: 'O primeiro restaurante, numa quinta nos arredores do Porto.', img: A + 'MCS_restaurantes_01-0x0.jpg' },
  { y: '1994', t: 'Restaurante do Miguel', where: 'Foz do Porto', p: 'Entre os doze melhores do país para a revista Exame.', img: A + 'MCS_site_livro_na_cozinha_1200x700-0x0.jpg' },
  { y: '1997', t: 'Bull & Bear', where: 'Porto · até 2008', p: 'No edifício da Bolsa. Garfo de Ouro, três Sóis Repsol e um dos 25 melhores da Europa para o Financial Times.', img: A + 'restaurantes/bull-bear.jpg' },
  { y: '2001', t: 'Paris, Xangai, Larousse', where: 'Até 2007', p: 'Ensina na Ferrandi, cozinha em Xangai para a Presidência da República e assina três receitas no Larousse.', img: A + 'MCS_Ideias_Soltas_2560x1400_01-1980x1083.jpg' },
  { y: '2009', t: 'deCastro, Largo, Less', where: 'Lisboa · até 2019', p: 'Muda-se para a capital. Abre o deCastro e dirige as cozinhas do Largo e do Less.', img: A + 'deCastro_01-1980x1083.jpg' },
  { y: '2012', t: 'deCastro Gaia', where: 'Vila Nova de Gaia', p: 'Regressa ao Norte com a Gran Cruz, no Espaço Porto Cruz.', img: A + 'restaurantes/decastro-gaia.jpg' },
  { y: '2014', t: 'Time Out Market', where: 'Lisboa', p: 'No Mercado da Ribeira, ao balcão, a cozinha regional de norte a sul.', img: A + 'casas/time-out-market/MCS_Mercado_TO_2025_01.jpg' },
  { y: '2018', t: 'Casario', where: 'Ribeira, Porto', p: 'Na Ribeira do Porto, a quatro mãos com José Guedes.', img: A + 'restaurantes/casario.webp' },
  { y: '2019', t: 'Cantina de Ventozelo', where: 'Douro', p: 'Na Quinta de Ventozelo, a cozinha da região feita com o que está por perto.', img: A + 'restaurantes/cantina-ventozelo.jpg' }
];

export const BOOKS = [
  { id: 'l-aromas', title: 'Uma Cozinha de Aromas', year: '2001', img: A + 'Livro_uma_cozinha_de_aromas_capa-1.jpg', buy: q('Uma Cozinha de Aromas Miguel Castro e Silva livro') },
  { id: 'l-food', title: 'The Food & Cooking of Portugal', year: '2007', img: A + 'Livro_The_Food_and_cooking_Portugal_CAPA.jpg', buy: q('Recipes from My Portuguese Kitchen Miguel Castro e Silva 9781908991072') },
  { id: 'l-cozinha', title: 'Na Cozinha de Miguel Castro e Silva', year: '2016', img: A + 'Livro_Na_cozinha_de_MCS_CAPA.jpg', buy: q('Na Cozinha de Miguel Castro e Silva Lua de Papel livro') }
];

export const AWARDS = [
  { y: '2000', t: 'Cozinheiro do Ano', s: 'Academia Portuguesa de Gastronomia' },
  { y: '2003', t: 'Garfo de Ouro', s: 'Expresso · Bull & Bear' },
  { y: '2004', t: 'Três Sóis Repsol', s: 'Bull & Bear' },
  { y: '2004', t: '25 melhores restaurantes da Europa', s: 'Financial Times' },
  { y: '2017', t: 'Prémio de carreira David Lopes Ramos', s: 'Revista de Vinhos' }
];

// Each clipping opens the article when it is online, a search otherwise.
export const CLIPS = [
  { img: A + 'imprensa_time_out_largo.jpg', name: 'Time Out', url: 'https://www.timeout.pt/lisboa/pt/restaurantes/largo' },
  { img: A + 'imprensa_fugas_ventozelo.jpg', name: 'Fugas', url: q('Fugas Público Cantina de Ventozelo Miguel Castro e Silva') },
  { img: A + 'imprensa_visao_less.jpg', name: 'Visão', url: q('Visão Less Miguel Castro e Silva Príncipe Real') },
  { img: A + 'imprensa_evasoes_de_castro.jpg', name: 'Evasões', url: q('Evasões deCastro Miguel Castro e Silva') },
  { img: A + 'imprensa_revista_vinhos_ventozelo.jpg', name: 'Revista de Vinhos', url: q('Revista de Vinhos Ventozelo Miguel Castro e Silva') },
  { img: A + 'imprensa_observador_entrevista.jpg', name: 'Observador', url: 'https://observador.pt/especiais/miguel-castro-e-silva-a-profissao-de-cozinheiro-estava-socialmente-abaixo-do-pedreiro/' }
];

export const COLLAB = [
  { b: 'Gran Cruz', s: 'Parceiro no Casario e no deCastro Gaia' },
  { b: 'Quinta de Ventozelo', s: 'Cozinha da Cantina, desde 2019' },
  { b: 'Time Out Market Lisboa', s: 'Espaço próprio no Mercado da Ribeira' },
  { b: 'Escola Ferrandi, Paris', s: 'Deu aulas de cozinha portuguesa' },
  { b: 'Larousse Gastronomique', s: 'Três receitas publicadas' },
  { b: 'Ideias Soltas', s: 'Consultoria: Serralves, Gulbenkian, Sonae, Vista Alegre' }
];

export const INSTAGRAM = 'https://www.instagram.com/chef_castrosilvamiguel/';
