// Restaurants and projects, with the dishes that were born in each one.
// Photos and dish names come from miguelcastrosilva.com (media library and the
// restaurant pages). Addresses and phones are the ones on that site, to confirm.

const C = 'assets/img/casas/';

function dishes(dir, list) {
  return list.map(([file, name]) => ({ img: C + dir + '/' + file + '.jpg', name: name || '' }));
}

export const HOUSES = [
  {
    id: 'casario', group: 'now', name: 'Casario', place: 'Ribeira, Porto',
    text: 'Desde 2018, a quatro mãos com José Guedes.',
    cover: 'assets/img/restaurantes/casario.webp',
    link: 'https://www.grancruzhouse.pt/restaurant',
    hero: 'assets/img/hero-casas/casario.webp',
    info: 'Praça da Ribeira, Viela do Buraco 19, Porto · +351 227 662 270',
    dishes: dishes('casario', [
      ['Casario_vieira_acafrao', 'Vieira, arroz de açafrão e limão, ovas avruga'],
      ['Casario_robalo', 'Robalo com funcho e laranja'],
      ['Casario_polvo_agriao', 'Polvo com batata doce e agrião'],
      ['Casario_rodovalho', 'Rodovalho com arroz de algas'],
      ['Casario_terrina_sapateira', 'Terrina de sapateira e maçã verde'],
      ['Casario_novilho', 'Novilho com molho à marrar e gratinado de batata'],
      ['Casario_04', 'Vitela barrosã com ensopado de grão e trompetas'],
      ['Casario_07', 'Puré de batata trufado com gema, espargo e queijo dos Açores · Lollipop de lula e camarão · Carpaccio de novilho'],
      ['Casario_08', 'Barriga de porco bísaro, couve · Novilho, legumes assados e molho de vinho · Bacalhau à Gomes de Sá'],
      ['Casario_03'], ['Casario_06'],
      ['Casario_leite_creme', 'Leite-creme de anis e laranja, amêndoa e figo'],
      ['Casario_tartelete_choco', 'Tartelete de chocolate com frutos tropicais'],
      ['Casario_09', 'Pudim Abade de Priscos · Mil-folhas de maçã assada com creme mascarpone · Mousse de chocolate']
    ])
  },
  {
    id: 'gaia', group: 'now', name: 'deCastro Gaia', place: 'Vila Nova de Gaia',
    text: 'No Espaço Porto Cruz, desde 2012.',
    cover: 'assets/img/restaurantes/decastro-gaia.jpg',
    link: 'https://www.espacoportocruz.pt/espaco/restaurante-decastro-gaia',
    hero: 'assets/img/hero-casas/gaia.jpg',
    info: 'Espaço Porto Cruz, Vila Nova de Gaia · +351 910 553 559',
    dishes: dishes('decastro-gaia', [
      ['de_castro_arroz_marisco', 'Arroz de marisco'],
      ['de_castro_camarao_alho', 'Camarão com malagueta e alho'],
      ['de_castro_bacalhau_bras', 'Bacalhau à Brás'],
      ['de_castro_dourada', 'Filetes de dourada sobre escabeche ligeiro'],
      ['de_castro_raia', 'Raia de alhada e esmagada de batata doce'],
      ['de_castro_bisaro_arroz_cog', 'Porco bísaro com arroz cremoso de cogumelos'],
      ['de_castro_feijao_tripas', 'Feijão com tripas'],
      ['de_castro_morcela', 'Morcela da Beira com maçã'],
      ['de_castro_franguinho', 'Franguinho recheado com sabores portugueses'],
      ['de_castro_entrecote', 'Entrecôte à portuguesa com presunto'],
      ['de_castro_rosbife', 'Rosbife, frutos frescos'],
      ['de_castro_espagos_presunto', 'Espargo verde, presunto e gorgonzola'],
      ['de_castro_cog_ovo', 'Cogumelos com ovo escalfado e tosta'],
      ['de_castro_pudim_alho_frances', 'Pudim de alho-francês, pão e molho de manteiga'],
      ['deCastro_Gaia_03'], ['deCastro_Gaia_12'], ['deCastro_Gaia_13'], ['deCastro_Gaia_14'], ['deCastro_Gaia_15'],
      ['de_castro_tarte_queijo', 'Tarte de queijo no forno, conserva de fruta'],
      ['de_castro_leite_creme', 'Leite-creme “Gran Cruz” queimado com sorvete de tangerina'],
      ['de_castro_bolo_choco', 'Bolo de chocolate sem farinha, pralinê de avelã']
    ])
  },
  {
    id: 'tom', group: 'now', name: 'Time Out Market', place: 'Lisboa',
    text: 'Ao balcão, no Mercado da Ribeira, desde 2014.',
    cover: 'assets/img/restaurantes/time-out-market.jpg',
    link: 'https://www.timeoutmarket.com/lisboa/',
    hero: 'assets/img/hero-casas/tom.jpg',
    info: 'Mercado da Ribeira, loja 10, Av. 24 de Julho 49, Lisboa',
    dishes: dishes('time-out-market', [
      ['2025_MCS_Mercado_Bacalhau_bras_peq', 'Bacalhau à Brás, o clássico'],
      ['MCS_Mercado_TO_2025_03_lombo_bacalhau', 'Lombo de bacalhau fresco com feijoca'],
      ['MCS_Mercado_TO_2025_01_lula', 'Lula grelhada e arroz negro, molho de manteiga'],
      ['MCS_Mercado_TO_2025_06_arroz_enchidos', 'Arroz de enchidos e cogumelos com cachaço de porco'],
      ['MCS_Mercado_TO_2025_04_vitela', 'Vitela em vinho tinto com puré de batata trufado'],
      ['MCS_Mercado_TO_2025_05_caldo_verde', 'Caldo verde'],
      ['MCS_Mercado_TO_2025_07_burger', 'Hambúrguer em pão de Mafra, chèvre, mostarda e mel'],
      ['MCS_Mercado_TO_2025_08_asa_frango', 'Coxa e asa de frango assada com batata frita'],
      ['Mercado_Ribeira_02', 'Francesinha de carnes assadas e paio de porco alentejano'],
      ['Mercado_Ribeira_03', 'Camarão e lulas salteadas com arroz de manjericão'],
      ['MerRib_17', 'Lulas recheadas com arroz de limão e guisado de alho-francês'],
      ['MerRib_14', 'Iscas de bacalhau com arroz de tomate'],
      ['MerRib_19', 'Sandes de porco com queijo de São Miguel'],
      ['MerRib_15', 'Cachaço de porco com arroz cremoso de enchidos'],
      ['MerRib_16', 'Lombelo de vitela em vinho tinto com puré de batata trufado'],
      ['MerRib_18', 'Coxa de pato no forno com feijão branco'],
      ['Mercado_Ribeira_05', 'Costela mendinha de vitela maronesa com arroz de forno'],
      ['Mercado_Ribeira_04'],
      ['MerRib_12', 'Bolo de chocolate sem farinha'],
      ['MerRib_13', 'Toucinho do céu'],
      ['Mercado_Ribeira_09']
    ])
  },
  {
    id: 'ventozelo', group: 'now', name: 'Cantina de Ventozelo', place: 'Douro',
    text: 'A cozinha da região, na Quinta de Ventozelo.',
    cover: 'assets/img/restaurantes/cantina-ventozelo.jpg',
    link: 'https://hotel.quintadeventozelo.pt/cantina',
    hero: 'assets/img/hero-casas/ventozelo.webp',
    info: 'Quinta de Ventozelo, Ervedosa do Douro · +351 254 249 670',
    dishes: dishes('cantina-ventozelo', [
      ['Cantina_Ventozelo_Almoco_Alcatra-Barosa-Arroz-Tomate', 'Alcatra barrosã com arroz de tomate'],
      ['Cantina_de_Ventozelo_01', 'Ensopada de bacalhau com grão · Beringelada'],
      ['Cantina_de_Ventozelo_03'], ['Cantina_de_Ventozelo_10']
    ])
  },
  {
    id: 'incomum', group: 'project', name: 'de Cantina Incomum', place: 'Cantina da Worten',
    text: 'Uma cantina de empresa pensada para provar que comida de cantina pode ser boa.',
    cover: C + 'cantina-incomum/MCS_Cantina_002.jpg',
    dishes: dishes('cantina-incomum', [
      ['MCS_Cantina_005'], ['MCS_Cantina_006'], ['MCS_Cantina_007'], ['MCS_Cantina_004'], ['MCS_Cantina_008'], ['MCS_Cantina_009'],
      ['MCS_Cantina_1'], ['MCS_Cantina_3'], ['MCS_Cantina_001'], ['MCS_Cantina_002'], ['MCS_Cantina_003'], ['MCS_Cantina_8'], ['MCS_Cantina_15']
    ])
  },
  {
    id: 'ideias', group: 'project', name: 'Ideias Soltas', place: 'Consultoria e eventos',
    text: 'Criações fora dos restaurantes: jantares, programas e festivais.',
    cover: C + 'ideias-soltas/MCS_Ideias_Soltas_03.jpg',
    dishes: dishes('ideias-soltas', [
      ['MCS_Ideias_Soltas_01', 'Rodovalho com arroz de lingueirão'],
      ['MCS_Ideias_Soltas_02', 'Lula recheada com toucinho alentejano'],
      ['MCS_Ideias_Soltas_03', 'Linguado e vieira com molho de alho-francês'],
      ['MCS_Ideias_Soltas_04', 'Bife do lombo com espinafres e queijo da serra'],
      ['MCS_Ideias_Soltas_05', 'Risotto de rúcula com berbigão'],
      ['MCS_Ideias_Soltas_06', 'Borrego em duas texturas com ensopado alentejano'],
      ['MCS_Ideias_Soltas_07', 'Mousse de chocolate com pralinê de avelã'],
      ['MCS_Ideias_Soltas_08', 'Jantar Essência'],
      ['MCS_Ideias_Soltas_09', 'Jantar Essência'],
      ['MCS_Ideias_Soltas_10_A', 'Patanisca com enguia assada e mel · Última Ceia, Canal História'],
      ['MCS_Ideias_Soltas_10_B', 'Truta salmonada com laranja e funcho · Última Ceia, Canal História'],
      ['MCS_Ideias_Soltas_10_C', 'Codorniz recheada · Última Ceia, Canal História'],
      ['MCS_Ideias_Soltas_10_D', 'Sericaia com chutney de figo e noz · Última Ceia, Canal História'],
      ['MCS_Ideias_Soltas_11_A', 'Polvo com migas de broa · 10’ Fest'],
      ['MCS_Ideias_Soltas_11_B', 'Lombo açoriano de batata doce e espinafres · 10’ Fest'],
      ['MCS_Ideias_Soltas_11_C', 'Pudim de mel de ananás com curcuma · 10’ Fest']
    ])
  },
  {
    id: 'bullbear', group: 'archive', name: 'Bull & Bear', place: 'Porto', years: '1997 a 2008',
    text: 'Garfo de Ouro, três Sóis Repsol e um dos 25 melhores da Europa para o Financial Times.',
    cover: 'assets/img/restaurantes/bull-bear.jpg',
    dishes: dishes('bull-bear', [
      ['BB_002', 'Filetes de sardinha marinados · Salada tépida de lulas · Tártaro de carapau'],
      ['BB_003', 'Arroz de robalo e amêijoas · Terrina de polvo · Robalo marinado'],
      ['BB_004', 'Risotto de rúcula e berbigão · Bacalhau assado e migas de poejo · Garoupa com uvas'],
      ['BB_005', 'Pudim, mel, requeijão e compota de abóbora · Gratinado de maçã com molho de baunilha']
    ])
  },
  {
    id: 'largo', group: 'archive', name: 'Largo', place: 'Chiado, Lisboa', years: '2010 a 2015',
    text: 'Nos antigos claustros do Convento da Igreja dos Mártires.',
    cover: C + 'largo/Largo_001.jpg',
    dishes: dishes('largo', [
      ['Largo_002', 'Vieiras, ovas de avruga e endívias'],
      ['Largo_003', 'Linguado e vieira sobre alho-francês e espargos'],
      ['Largo_004', 'Robalo e berbigão'],
      ['Largo_005', 'Pescada crostada sobre rúcula'],
      ['Largo_006', 'Risotto de bacalhau'],
      ['Largo_007', 'Risotto de cepes e morilles'],
      ['Largo_008', 'Magret e risotto de espargos verdes'],
      ['Largo_009', 'Mousse de chocolate']
    ])
  },
  {
    id: 'less', group: 'archive', name: 'Less', place: 'Príncipe Real, Lisboa', years: '2015 a 2019',
    text: 'Fine dining descontraído, no palacete da Embaixada.',
    cover: C + 'less/MCS_LESS_05.jpg',
    dishes: dishes('less', [
      ['MCS_LESS_01', 'Lula recheada com arroz de limão'],
      ['MCS_LESS_07', 'Lollipop de lula e camarão'],
      ['MCS_LESS_03', 'Puré de batata doce com cavala fumada'],
      ['MCS_LESS_04', 'Tártaro de robalo com pesto de beterraba e noz'],
      ['MCS_LESS_05', 'Arroz de açafroa e limão com vieira e ovas avruga'],
      ['MCS_LESS_06', 'Lulas salteadas'],
      ['MCS_LESS_08', 'Marquise de chocolate · Mousse de chocolate'],
      ['MCS_LESS_02', 'Mil-folhas de maçã assada com creme mascarpone']
    ])
  },
  {
    id: 'decastro', group: 'archive', name: 'deCastro', place: 'Lisboa', years: '2009 a 2014',
    text: 'A cultura da mesa portuguesa, dos petiscos às sobremesas.',
    cover: C + 'decastro-lisboa/deCastro_03.jpg',
    dishes: dishes('decastro-lisboa', [
      ['deCastro_05', 'Ervilhas guisadas com ovo de codorniz'],
      ['deCastro_02', 'Trouxa de espinafres e alheira · Empada de pato com trompetas · Creme de coentros'],
      ['deCastro_03', 'Lascas de bacalhau'],
      ['deCastro_04', 'Filetes de polvo com açorda de tomate'],
      ['deCastro_10', 'Sopa de cação'],
      ['deCastro_12', 'Raia de alhada'],
      ['deCastro_11', 'Pernil de borrego com ensopado de grão'],
      ['deCastro_01', 'Pica-pau de vitela'],
      ['deCastro_07', 'Toucinho do céu'],
      ['deCastro_08', 'Tartelete de chocolate branco com framboesas'],
      ['deCastro_09', 'Pão de ló com compota de limão']
    ])
  }
];
