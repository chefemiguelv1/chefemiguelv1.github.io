/* Content for the demo. Everything here comes from the current site
   (miguelcastrosilva.com) and will be migrated and proofread with the chef. */

var IMG = 'assets/img/';

var PROJECTS = [
  // ── current
  { group: 'now', name: 'Time Out Market', place: 'Lisboa', year: '2014', img: 'MerRib_10-1600x875.jpg',
    pt: 'Cozinha regional de Norte a Sul, no Mercado da Ribeira.', en: 'Regional cooking from North to South, at Mercado da Ribeira.',
    link: 'https://www.timeoutmarket.com/lisboa/',
    cover: 'restaurantes/time-out-market.jpg',
    photos: ['MerRib_10-1600x875.jpg', 'pratos/2025_MCS_Mercado_Bacalhau_bras_peq.jpg', 'pratos/MCS_Mercado_TO_2025_05_caldo_verde.jpg', 'pratos/MCS_Mercado_TO_2025_03_lombo_bacalhau.jpg', 'pratos/MCS_Mercado_TO_2025_06_arroz_enchidos.jpg', 'pratos/MCS_Mercado_TO_2025_04_vitela.jpg', 'pratos/MCS_Mercado_TO_2025_01_lula.jpg'] },
  { group: 'now', name: 'Casario', place: 'Ribeira, Porto', year: '2018', img: 'Casario_01_2560x1400-1980x1083.jpg',
    pt: 'A quatro mãos com José Guedes, à beira do Douro.', en: 'Four hands with José Guedes, by the Douro.',
    link: 'https://www.grancruzhouse.pt/restaurant',
    cover: 'restaurantes/casario.webp',
    photos: ['Casario_01_2560x1400-1980x1083.jpg', 'pratos/Casario_vieira_acafrao.jpg', 'pratos/Casario_robalo.jpg', 'pratos/Casario_polvo_agriao.jpg', 'pratos/Casario_rodovalho.jpg', 'pratos/Casario_terrina_sapateira.jpg', 'pratos/Casario_novilho.jpg', 'pratos/Casario_tartelete_choco.jpg'] },
  { group: 'now', name: 'deCastro Gaia', place: 'Vila Nova de Gaia', year: '2012', img: 'deCastro_Gaia_01_2560x1400-1980x1083.jpg',
    pt: 'Cozinha petisqueira no Espaço Porto Cruz.', en: 'Portuguese small plates at Espaço Porto Cruz.',
    link: 'https://www.espacoportocruz.pt/espaco/restaurante-decastro-gaia',
    cover: 'restaurantes/decastro-gaia.jpg',
    photos: ['deCastro_Gaia_01_2560x1400-1980x1083.jpg', 'pratos/de_castro_arroz_marisco.jpg', 'pratos/de_castro_camarao_alho.jpg', 'pratos/de_castro_bisaro_arroz_cog.jpg', 'pratos/de_castro_dourada.jpg', 'pratos/de_castro_raia.jpg', 'pratos/de_castro_feijao_tripas.jpg', 'pratos/de_castro_morcela.jpg', 'pratos/de_castro_pudim_alho_frances.jpg', 'pratos/de_castro_tarte_queijo.jpg', 'pratos/de_castro_bolo_choco.jpg'] },
  { group: 'now', name: 'Cantina de Ventozelo', place: 'Douro', year: '2019', img: 'Cantina_de_Ventozelo_02_2560x1400-1980x1083.jpg',
    pt: 'Cozinha de proximidade na Quinta de Ventozelo.', en: 'Local, seasonal cooking at Quinta de Ventozelo.',
    link: 'https://hotel.quintadeventozelo.pt/cantina',
    cover: 'restaurantes/cantina-ventozelo.jpg',
    photos: ['Cantina_de_Ventozelo_02_2560x1400-1980x1083.jpg', 'pratos/Cantina_Ventozelo_Almoco_Alcatra-Barosa-Arroz-Tomate.jpg', 'pratos/MCS_Cantina_007.jpg', 'pratos/MCS_Cantina_005.jpg', 'pratos/MCS_Cantina_003.jpg', 'pratos/MCS_Cantina_001.jpg'] },
  // ── coming soon (details to come from the chef)
  { group: 'soon', name: 'Madeira', place: 'Madeira', year: 'Em breve', yearEn: 'Coming soon',
    pt: 'Um novo restaurante. Mais novidades em breve.', en: 'A new restaurant. More news soon.' },
  // ── archive
  { group: 'archive', name: 'Bull & Bear', place: 'Porto', year: '1997 a 2008', img: 'restaurantes/bull-bear.jpg',
    pt: 'Garfo de Ouro do Expresso, três Sóis Repsol e um dos 25 melhores restaurantes da Europa para o Financial Times.', en: 'Expresso’s Garfo de Ouro, three Repsol Suns and one of Europe’s 25 best restaurants for the Financial Times.' },
  { group: 'archive', name: 'Largo', place: 'Chiado, Lisboa', year: '2010 a 2015', img: 'Largo_001.jpg',
    pt: 'No Largo de São Carlos, no Chiado.', en: 'On Largo de São Carlos, in Chiado.' },
  { group: 'archive', name: 'Less', place: 'Príncipe Real, Lisboa', year: '2015 a 2019', img: 'MCS_LESS_01-1980x1083.jpg',
    pt: 'No palacete da Embaixada, no Príncipe Real.', en: 'In the Embaixada palace, in Príncipe Real.' },
  { group: 'archive', name: 'deCastro', place: 'Lisboa', year: '2009 a 2014', img: 'deCastro_01-1980x1083.jpg',
    pt: 'Petiscos portugueses. Quatro estrelas na Time Out.', en: 'Portuguese petiscos. Four stars from Time Out.' },
  { group: 'archive', name: 'Ideias Soltas', place: 'Consultoria', year: '', img: 'MCS_Ideias_Soltas_2560x1400_01-1980x1083.jpg',
    pt: 'Consultoria para Serralves, Gulbenkian, Sonae e Vista Alegre.', en: 'Consulting for Serralves, Gulbenkian, Sonae and Vista Alegre.' },
  { group: 'archive', name: 'Restaurante do Miguel', place: 'Foz, Porto', year: '1994', img: 'MCS_site_base_home_2560x1400_pb-1980x1083.jpg',
    pt: 'Um dos doze melhores restaurantes do país para a revista Exame.', en: 'One of the country’s twelve best restaurants for Exame magazine.' }
];

// Dishes by category, from the photos on his current site. The chef will
// confirm the list, the names and which ones are his signature dishes.
var DISH_CATS = [
  { key: 'peixe', pt: 'Peixe e marisco', en: 'Fish and seafood' },
  { key: 'carne', pt: 'Carne', en: 'Meat' },
  { key: 'especiais', pt: 'Sopas e doces', en: 'Soups and sweets' }
];
// Ordered from the lightest photo to the darkest inside each group.
var DISHES = [
  { cat: 'peixe', img: 'pratos/Casario_vieira_acafrao.jpg', pt: 'Vieira com açafrão', en: 'Scallop with saffron', house: 'Casario' },
  { cat: 'peixe', img: 'pratos/MCS_Mercado_TO_2025_03_lombo_bacalhau.jpg', pt: 'Lombo de bacalhau', en: 'Salt cod loin', house: 'Time Out Market' },
  { cat: 'peixe', img: 'pratos/Casario_rodovalho.jpg', pt: 'Rodovalho', en: 'Turbot', house: 'Casario' },
  { cat: 'peixe', img: 'pratos/de_castro_dourada.jpg', pt: 'Dourada', en: 'Gilthead bream', house: 'deCastro Gaia' },
  { cat: 'peixe', img: 'pratos/de_castro_raia.jpg', pt: 'Raia', en: 'Skate', house: 'deCastro Gaia' },
  { cat: 'peixe', img: 'pratos/Casario_robalo.jpg', pt: 'Robalo', en: 'Sea bass', house: 'Casario' },
  { cat: 'peixe', img: 'pratos/MCS_Mercado_TO_2025_01_lula.jpg', pt: 'Lula', en: 'Squid', house: 'Time Out Market' },
  { cat: 'peixe', img: 'pratos/de_castro_camarao_alho.jpg', pt: 'Camarão ao alho', en: 'Garlic prawns', house: 'deCastro Gaia' },
  { cat: 'peixe', img: 'pratos/de_castro_arroz_marisco.jpg', pt: 'Arroz de marisco', en: 'Seafood rice', house: 'deCastro Gaia' },
  { cat: 'peixe', img: 'pratos/2025_MCS_Mercado_Bacalhau_bras_peq.jpg', pt: 'Bacalhau à Brás', en: 'Bacalhau à Brás', house: 'Time Out Market' },
  { cat: 'peixe', img: 'pratos/Casario_terrina_sapateira.jpg', pt: 'Terrina de sapateira', en: 'Brown crab terrine', house: 'Casario' },
  { cat: 'peixe', img: 'pratos/Casario_polvo_agriao.jpg', pt: 'Polvo e agrião', en: 'Octopus and watercress', house: 'Casario' },
  { cat: 'carne', img: 'pratos/MCS_Mercado_TO_2025_06_arroz_enchidos.jpg', pt: 'Arroz de enchidos', en: 'Rice with cured sausages', house: 'Time Out Market' },
  { cat: 'carne', img: 'pratos/de_castro_morcela.jpg', pt: 'Morcela', en: 'Blood sausage', house: 'deCastro Gaia' },
  { cat: 'carne', img: 'pratos/Cantina_Ventozelo_Almoco_Alcatra-Barosa-Arroz-Tomate.jpg', pt: 'Alcatra barrosã, arroz de tomate', en: 'Barrosã beef, tomato rice', house: 'Cantina de Ventozelo' },
  { cat: 'carne', img: 'pratos/MCS_Mercado_TO_2025_04_vitela.jpg', pt: 'Vitela', en: 'Veal', house: 'Time Out Market' },
  { cat: 'carne', img: 'pratos/de_castro_bisaro_arroz_cog.jpg', pt: 'Bísaro e arroz de cogumelos', en: 'Bísaro pork, mushroom rice', house: 'deCastro Gaia' },
  { cat: 'carne', img: 'pratos/de_castro_feijao_tripas.jpg', pt: 'Feijão com tripas', en: 'Tripe and beans', house: 'deCastro Gaia' },
  { cat: 'carne', img: 'pratos/Casario_novilho.jpg', pt: 'Novilho', en: 'Veal', house: 'Casario' },
  { cat: 'especiais', img: 'pratos/MCS_Mercado_TO_2025_05_caldo_verde.jpg', pt: 'Caldo verde', en: 'Caldo verde', house: 'Time Out Market' },
  { cat: 'especiais', img: 'pratos/MCS_Cantina_005.jpg', pt: 'Sopa e pão da casa', en: 'House soup and bread', house: 'Cantina de Ventozelo' },
  { cat: 'especiais', img: 'pratos/de_castro_pudim_alho_frances.jpg', pt: 'Pudim de alho-francês', en: 'Leek pudding', house: 'deCastro Gaia' },
  { cat: 'especiais', img: 'pratos/Casario_tartelete_choco.jpg', pt: 'Tartelete de chocolate', en: 'Chocolate tartlet', house: 'Casario' },
  { cat: 'especiais', img: 'pratos/de_castro_bolo_choco.jpg', pt: 'Bolo de chocolate', en: 'Chocolate cake', house: 'deCastro Gaia' },
  { cat: 'especiais', img: 'pratos/de_castro_tarte_queijo.jpg', pt: 'Tarte de queijo', en: 'Cheese tart', house: 'deCastro Gaia' }
];

var TIMELINE = [
  { y: '1961', pt: ['Porto', 'Nasce no Porto. Antes da cozinha vem a música: piano, depois baixo e alguns anos como técnico de som. Estuda Biologia na Alemanha, onde trabalha em restaurantes para pagar as contas, e regressa ao Porto para a indústria têxtil.'], en: ['Porto', 'Born in Porto. Music came first: piano, then bass, then a few years as a sound engineer. He studied Biology in Germany, working in restaurants to pay the bills, and came back to Porto to work in textiles.'] },
  { y: '1992', pt: ['Quinta dos Vales', 'Muda de vida e abre o primeiro restaurante, numa quinta rústica na Maia. A cozinha deixa de ser um biscate e passa a ser o ofício.'], en: ['Quinta dos Vales', 'He changes course and opens his first restaurant, on a rustic farm in Maia. Cooking stops being a side job and becomes the trade.'], img: 'MCS_restaurantes_01-0x0.jpg' },
  { y: '1994', pt: ['Restaurante do Miguel', 'Na Foz. A revista Exame põe-no entre os doze melhores do país. Começam ali os jantares vínicos com Dirk Niepoort, Luís Pato e Ricardo Nicolau de Almeida.'], en: ['Restaurante do Miguel', 'In Foz. Exame magazine names it one of the country’s twelve best. The wine dinners with Dirk Niepoort, Luís Pato and Ricardo Nicolau de Almeida begin there.'] },
  { y: '1997', pt: ['Bull & Bear', 'No edifício da Bolsa, até 2008. Garfo de Ouro do Expresso, três Sóis Repsol e, em 2004, um dos 25 melhores restaurantes da Europa para o Financial Times.'], en: ['Bull & Bear', 'In the Stock Exchange building, until 2008. Expresso’s Garfo de Ouro, three Repsol Suns and, in 2004, one of Europe’s 25 best restaurants for the Financial Times.'], img: 'BB_1280_01.jpg' },
  { y: '2001', pt: ['Cozinheiro do Ano', 'Eleito Cozinheiro do Ano 2000 pela Academia Portuguesa de Gastronomia. Publica “Uma Cozinha de Aromas” e dá aulas na escola Ferrandi, em Paris.'], en: ['Chef of the Year', 'Named Chef of the Year 2000 by the Portuguese Academy of Gastronomy. Publishes “Uma Cozinha de Aromas” and teaches at the Ferrandi school in Paris.'] },
  { y: '2005', pt: ['Xangai', 'Cozinha em Xangai o jantar oferecido pela Presidência da República. Cozinha por Portugal em França, na Bélgica, na Hungria e no Brasil.'], en: ['Shanghai', 'Cooks the dinner hosted by the Portuguese Presidency in Shanghai. Cooks for Portugal in France, Belgium, Hungary and Brazil.'] },
  { y: '2007', pt: ['Larousse', 'Assina três receitas no Larousse Gastronomique e publica “The Food & Cooking of Portugal”. É dos primeiros no país a cozinhar a baixa temperatura.'], en: ['Larousse', 'Signs three recipes in the Larousse Gastronomique and publishes “The Food & Cooking of Portugal”. One of the first in the country to cook at low temperature.'] },
  { y: '2009', pt: ['Lisboa', 'Muda-se para a capital e abre o deCastro, dedicado aos petiscos. Dirige depois a cozinha do Largo, no Chiado, e do Less, no Príncipe Real.'], en: ['Lisbon', 'Moves to the capital and opens deCastro, devoted to petiscos. He then runs the kitchens of Largo, in Chiado, and Less, in Príncipe Real.'], img: 'deCastro_01-1980x1083.jpg' },
  { y: '2012', pt: ['Gaia', 'Regressa ao Norte com a Gran Cruz e abre o deCastro Gaia, no Espaço Porto Cruz.'], en: ['Gaia', 'Returns to the North with Gran Cruz and opens deCastro Gaia, at Espaço Porto Cruz.'], img: 'deCastro_Gaia_01_2560x1400-1980x1083.jpg' },
  { y: '2014', pt: ['Mercado da Ribeira', 'Abre o espaço com o seu nome no Time Out Market, onde serve ao balcão a cozinha regional de norte a sul.'], en: ['Mercado da Ribeira', 'Opens his namesake counter at Time Out Market, serving regional cooking from north to south.'], img: 'MerRib_10-1600x875.jpg' },
  { y: '2017', pt: ['David Lopes Ramos', 'Recebe o prémio de carreira da Revista de Vinhos. No mesmo ano abre o Lumni, no topo do hotel The Lumiares, no Bairro Alto.'], en: ['David Lopes Ramos', 'Receives Revista de Vinhos’ lifetime award. The same year he opens Lumni, at the top of The Lumiares hotel in Bairro Alto.'] },
  { y: '2018', pt: ['Casario', 'Abre o Casario, na Ribeira do Porto, a quatro mãos com José Guedes.'], en: ['Casario', 'Opens Casario, on Porto’s Ribeira, cooking four-handed with José Guedes.'], img: 'Casario_01_2560x1400-1980x1083.jpg' },
  { y: '2019', pt: ['Douro', 'Na Quinta de Ventozelo, em São João da Pesqueira, abre a Cantina: a cozinha da região, feita com o que está por perto.'], en: ['Douro', 'At Quinta de Ventozelo, in São João da Pesqueira, he opens the Cantina: the region’s own cooking, made with what is close by.'], img: 'Cantina_de_Ventozelo_02_2560x1400-1980x1083.jpg' },
  { y: '2021', pt: ['Mesa Marcada', 'Os chefs escolhem-no para o Prémio Especial Carreira Cutipol, nos Prémios Mesa Marcada.'], en: ['Mesa Marcada', 'His fellow chefs choose him for the Cutipol Special Career Award at the Mesa Marcada Awards.'] },
  { y: 'Hoje', yEn: 'Today', pt: ['Quatro casas', 'Lisboa, Porto, Gaia e Douro, consultoria e livros. E um novo restaurante na Madeira, a caminho.'], en: ['Four houses', 'Lisbon, Porto, Gaia and the Douro, consulting and books. And a new restaurant in Madeira on the way.'] }
];

var BOOKS = [
  { title: 'Uma Cozinha de Aromas', year: '2001', img: 'Livro_uma_cozinha_de_aromas_capa-1.jpg', pt: 'Livraria Civilização, Porto.', en: 'Livraria Civilização, Porto.', buy: 'https://www.google.com/search?q=Uma%20Cozinha%20de%20Aromas%20Miguel%20Castro%20e%20Silva%20livro' },
  { title: 'The Food & Cooking of Portugal', year: '2007', img: 'Livro_The_Food_and_cooking_Portugal_CAPA.jpg', pt: 'Anness Publishing, Londres. Reeditado como “Recipes from My Portuguese Kitchen”.', en: 'Anness Publishing, London. Reissued as “Recipes from My Portuguese Kitchen”.', buy: 'https://www.google.com/search?q=Recipes%20from%20My%20Portuguese%20Kitchen%20Miguel%20Castro%20e%20Silva%209781908991072' },
  { title: 'Na Cozinha de Miguel Castro e Silva', year: '2016', img: 'Livro_Na_cozinha_de_MCS_CAPA.jpg', pt: 'Lua de Papel, com Augusto Freitas de Sousa.', en: 'Lua de Papel, with Augusto Freitas de Sousa.', buy: 'https://www.google.com/search?q=Na%20Cozinha%20de%20Miguel%20Castro%20e%20Silva%20Lua%20de%20Papel%20livro' }
];

var PRESS = [
  ['imprensa_observador_entrevista.jpg', 'Observador', 'https://observador.pt/especiais/miguel-castro-e-silva-a-profissao-de-cozinheiro-estava-socialmente-abaixo-do-pedreiro/'],
  ['imprensa_time_out_largo.jpg', 'Time Out · Largo', 'https://www.timeout.pt/lisboa/pt/restaurantes/largo'],
  ['imprensa_fugas_ventozelo.jpg', 'Fugas · Ventozelo', 'https://www.google.com/search?q=Fugas%20P%C3%BAblico%20Cantina%20de%20Ventozelo%20Miguel%20Castro%20e%20Silva'],
  ['imprensa_visao_less.jpg', 'Visão · Less', 'https://www.google.com/search?q=Vis%C3%A3o%20Less%20Miguel%20Castro%20e%20Silva%20Pr%C3%ADncipe%20Real'],
  ['imprensa_evasoes_de_castro.jpg', 'Evasões · deCastro', 'https://www.google.com/search?q=Evas%C3%B5es%20deCastro%20Miguel%20Castro%20e%20Silva'],
  ['imprensa_revista_vinhos_ventozelo.jpg', 'Revista de Vinhos', 'https://www.google.com/search?q=Revista%20de%20Vinhos%20Ventozelo%20Miguel%20Castro%20e%20Silva'],
  ['imprensa_mutante_TOM.jpg', 'Mutante · Time Out Market', 'https://www.google.com/search?q=Mutante%20Time%20Out%20Market%20Miguel%20Castro%20e%20Silva'],
  ['imprensa_time_out_casario.jpg', 'Time Out · Casario', 'https://www.google.com/search?q=Time%20Out%20Casario%20Miguel%20Castro%20e%20Silva'],
  ['imprensa_mesa_marcada_livro.jpg', 'Mesa Marcada', 'https://www.google.com/search?q=Mesa%20Marcada%20livro%20Na%20Cozinha%20de%20Miguel%20Castro%20e%20Silva'],
  ['imprensa_TO_sopas.jpg', 'Time Out · Sopas', 'https://www.timeout.pt/lisboa/pt/noticias/sopas-gelados-e-carnaval-assim-sera-agosto-no-time-out-market-080823'],
  ['imprensa_attitude_93_ventozelo.jpg', 'Attitude', 'https://www.google.com/search?q=Attitude%20revista%20Ventozelo%20Miguel%20Castro%20e%20Silva'],
  ['imprensa_visao_Casario.jpg', 'Visão · Casario', 'https://www.google.com/search?q=Vis%C3%A3o%20Casario%20Miguel%20Castro%20e%20Silva'],
  ['imprensa_bcbm_de_castro.jpg', 'BCBM · deCastro', 'https://www.google.com/search?q=BCBM%20deCastro%20Miguel%20Castro%20e%20Silva'],
  ['imprensa_fugas_casario.jpg', 'Fugas · Casario', 'https://www.google.com/search?q=Fugas%20Casario%20Miguel%20Castro%20e%20Silva']
];

var GALLERY = [
  { img: 'MCS_restaurantes_02-0x0.jpg', pt: 'Cenouras em manteiga', en: 'Butter-glazed carrots', size: 'wide' },
  { img: 'MCS_restaurantes_01-0x0.jpg', pt: 'O molho, no fim', en: 'The sauce, last', size: 'tall' },
  { video: 'xBet9sDm69s', img: 'yt_intro.jpg', pt: 'Filme · Introdução', en: 'Film · Introduction', size: 'sq' },
  { img: 'MCS_projetos-0x0.jpg', pt: 'Empratar', en: 'Plating', size: 'sq' },
  { img: 'Cantina_de_Ventozelo_02_2560x1400-1980x1083.jpg', pt: 'Cantina de Ventozelo, Douro', en: 'Cantina de Ventozelo, Douro', size: 'wide' },
  { img: 'MCS_site_livro_na_cozinha_1200x700-0x0.jpg', pt: 'Cantarelos', en: 'Chanterelles', size: 'sq' },
  { img: 'MCS_Ideias_Soltas_2560x1400_01-1980x1083.jpg', pt: 'Arroz e peixe', en: 'Rice and fish', size: 'tall' },
  { img: 'MCS_imprensa-0x0.jpg', pt: 'O fogão', en: 'At the stove', size: 'wide' },
  { video: 'OEja3sMxw6c', img: 'yt_bio.jpg', pt: 'Filme · Biografia', en: 'Film · Biography', size: 'sq' },
  { img: 'Casario_01_2560x1400-1980x1083.jpg', pt: 'Casario, Porto', en: 'Casario, Porto', size: 'wide' },
  { img: 'deCastro_Gaia_01_2560x1400-1980x1083.jpg', pt: 'deCastro Gaia', en: 'deCastro Gaia', size: 'wide' },
  { img: 'MerRib_10-1600x875.jpg', pt: 'Time Out Market, Lisboa', en: 'Time Out Market, Lisbon', size: 'wide' },
  { img: 'pratos/MCS_Cantina_007.jpg', pt: 'Almoço na Cantina', en: 'Lunch at the Cantina', size: 'sq' },
  { img: 'BB_1280_01.jpg', pt: 'Bull & Bear, Porto', en: 'Bull & Bear, Porto', size: 'wide' }
];

var I18N = {
  en: {
    'nav.chef': 'The Chef', 'nav.projects': 'Restaurants', 'nav.path': 'Path', 'nav.books': 'Books',
    'nav.press': 'Press', 'nav.gallery': 'Gallery', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Chef · Porto, 1961',
    'hero.lede': 'Thirty-five years reinventing Portuguese cooking, from Porto to the Douro, from Lisbon to the world.',
    'hero.seal': 'WATCH THE FILM · WATCH THE FILM · WATCH THE FILM · ',
    'hero.since': 'Since 1992', 'hero.cue': 'Scroll',
    'chef.eyebrow': 'The Chef',
    'chef.statement': 'One of the first to play with traditional Portuguese cooking, back when that was almost an insult.',
    'chef.p1': 'Before the kitchen there was music: piano, then bass, then sound engineering. He studied Biology in Germany, working restaurant shifts to get by. Back in Porto, he was a product director in textiles.',
    'chef.p2': 'In 1992 he changed course and opened his first restaurant in Maia. Then came Restaurante do Miguel in Foz, and Bull & Bear in the Stock Exchange building, where his name travelled beyond Portugal.',
    'chef.p3': 'Today he is a consultant, author and the signature behind houses in Lisbon, Porto, Gaia and the Douro. He has cooked for Portugal in Hong Kong, Shanghai, Paris, Bordeaux, Brussels, Budapest and São Paulo.',
    'facts.years': 'years of cooking', 'facts.books': 'books published',
    'facts.chef': 'Chef of the Year · Portuguese Academy of Gastronomy',
    'facts.award': 'David Lopes Ramos lifetime award · Revista de Vinhos',
    'proj.eyebrow': 'Projects', 'proj.title': 'Where to eat<br><em>today</em>', 'proj.now': 'Current', 'proj.archive': 'Archive',
    'proj.visit': 'Visit',
    'path.eyebrow': 'Path', 'path.title': 'From Porto<br>to the <em>world</em>',
    'books.eyebrow': 'Books', 'books.title': 'Cooking,<br><em>in writing</em>',
    'press.eyebrow': 'Press', 'press.title': 'What was<br><em>written</em>',
    'press.quote': '“One of the chefs of the moment in the city.”',
    'press.h1': 'Bull & Bear among Europe’s 25 best restaurants · Financial Times, 2004',
    'press.h2': '1st among Portugal’s ten reference chefs · 2004',
    'press.h3': 'Garfo de Ouro · Bull & Bear, 2003',
    'press.h4': 'Three recipes in the Larousse Gastronomique · 2007',
    'gal.eyebrow': 'Gallery', 'gal.title': 'Dishes, houses<br><em>and moments</em>',
    'hero.phrase': 'Portuguese cooking <em>with soul.</em>', 'proj.title2': 'Restaurants', 'soon.kicker': 'Coming soon', 'gal.photos': 'Photographs', 'gal.films': 'Films', 'drag': 'Drag', 'nav.dishes': 'Dishes', 'sig.eyebrow': 'Signature dishes', 'sig.title': 'A library<br><em>of dishes</em>', 'sig.note': 'The dishes he created and that stayed. Not a menu: a memory of Portuguese cooking, for those who love to eat and those who cook.', 'proj.gallery': 'See gallery', 'proj.book': 'Book a table', 'proj.photos': 'photos', 'cf.phone': 'Phone (optional)', 'cf.msg': 'Message', 'cf.send': 'Send message', 'cf.thanksNote': 'Your message arrived. We will reply shortly.',
    'ig.eyebrow': 'Instagram', 'ig.title': 'Follow<br><em>the kitchen</em>', 'ig.posts': 'posts', 'ig.followers': 'followers', 'ig.following': 'following', 'ig.follow': 'Follow', 'ig.message': 'Send message', 'ig.messageShort': 'Message', 'ig.tabPosts': 'Posts', 'ig.more': 'See more posts', 'ig.open': 'See more on Instagram',
    'contact.eyebrow': 'Contact', 'contact.title': 'Shall we<br>set the table?',
    'contact.note': 'Events, consulting, press or anything else: write to us. The reply comes by email.',
    'q1.q': 'How can we help?', 'q1.a': 'Private event', 'q1.b': 'Consulting', 'q1.c': 'Press', 'q1.d': 'Something else',
    'q2.evento': 'For how many guests?', 'q2.consultoria': 'What kind of project?', 'q2.imprensa': 'What is it for?', 'q2.outro': 'What is it about?',
    'q2.more': 'Tell us a little more',
    'q3.q': 'How do we reply?', 'q3.name': 'Name', 'q3.rgpd': 'I have read the <a href="privacidade.html" target="_blank">privacy policy</a> and agree my details are used only to answer this message.',
    'q.back': '← Back', 'q.next': 'Continue', 'q.send': 'Send request',
    'q.thanks': 'Thank you. <em>Talk soon.</em>', 'q.thanksNote': 'Your request reached the team. We will reply shortly.',
    'foot.mawebs': 'Handmade in Mafra', 'foot.about': 'Cook. Portuguese cooking with soul, from Porto to the Douro, since 1992.', 'foot.hChef': 'The chef', 'foot.bio': 'Biography', 'foot.hMore': 'More', 'foot.write': 'Send a message', 'foot.disputes': 'Dispute resolution', 'foot.role': 'Cook and consultant', 'foot.hLegal': 'Legal', 'foot.hFollow': 'Follow', 'foot.madeby': 'Site handmade by MA Webs, in Mafra.', 'foot.privacy': 'Privacy policy', 'foot.cookies': 'Cookie policy', 'foot.terms': 'Terms of use', 'foot.complaints': 'Complaints Book', 'foot.ral': 'In a consumer dispute, consumers may turn to an alternative dispute resolution body. More information on the Consumer Portal, at <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener">consumidor.gov.pt</a>.', 'foot.rights': '© 2026 Miguel Castro e Silva. All rights reserved.', 'proj.site': 'Visit the website', 'books.buy': 'Where to find it'
  }
};

var Q2 = {
  evento:      { pt: ['Até 12', '12, 40', '40, 100', 'Mais de 100'], en: ['Up to 12', '12, 40', '40, 100', 'Over 100'], label: { pt: 'Para quantas pessoas?' } },
  consultoria: { pt: ['Restaurante novo', 'Revisão de carta', 'Hotelaria', 'Indústria'], en: ['New restaurant', 'Menu review', 'Hospitality', 'Industry'], label: { pt: 'Que tipo de projeto?' } },
  imprensa:    { pt: ['Entrevista', 'Fotografia', 'Televisão', 'Receita'], en: ['Interview', 'Photography', 'Television', 'Recipe'], label: { pt: 'Para que é?' } },
  outro:       { pt: ['Livros', 'Vinhos', 'Parceria', 'Outro'], en: ['Books', 'Wines', 'Partnership', 'Other'], label: { pt: 'Sobre o quê?' } }
};
