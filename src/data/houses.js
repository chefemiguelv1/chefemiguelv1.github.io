// Restaurants and the dishes that were born in each one.
// Photos come from the restaurant pages of miguelcastrosilva.com.
// A dish without a name shows only the house name in the enlarged view.

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
    dishes: dishes('casario', [
      ['Casario_vieira_acafrao', 'Vieira com açafrão'], ['Casario_robalo', 'Robalo'],
      ['Casario_polvo_agriao', 'Polvo e agrião'], ['Casario_rodovalho', 'Rodovalho'],
      ['Casario_terrina_sapateira', 'Terrina de sapateira'], ['Casario_novilho', 'Novilho'],
      ['Casario_04'], ['Casario_leite_creme'], ['Casario_tartelete_choco', 'Tartelete de chocolate'],
      ['Casario_07'], ['Casario_08'], ['Casario_09']
    ])
  },
  {
    id: 'gaia', group: 'now', name: 'deCastro Gaia', place: 'Vila Nova de Gaia',
    text: 'No Espaço Porto Cruz, desde 2012.',
    cover: 'assets/img/restaurantes/decastro-gaia.jpg',
    link: 'https://www.espacoportocruz.pt/espaco/restaurante-decastro-gaia',
    dishes: dishes('decastro-gaia', [
      ['de_castro_arroz_marisco', 'Arroz de marisco'], ['de_castro_camarao_alho', 'Camarão ao alho'],
      ['de_castro_bisaro_arroz_cog', 'Bísaro e arroz de cogumelos'], ['de_castro_dourada', 'Dourada'],
      ['de_castro_raia', 'Raia'], ['de_castro_feijao_tripas', 'Feijão com tripas'],
      ['de_castro_morcela', 'Morcela'], ['de_castro_cog_ovo', 'Cogumelos com ovo'],
      ['de_castro_espagos_presunto', 'Espargos com presunto'], ['de_castro_entrecote', 'Entrecôte'],
      ['de_castro_rosbife', 'Rosbife'], ['de_castro_franguinho', 'Franguinho'],
      ['de_castro_coxa_frango_piri', 'Coxa de frango piri-piri'], ['de_castro_pudim_alho_frances', 'Pudim de alho-francês'],
      ['de_castro_tarte_queijo', 'Tarte de queijo'], ['de_castro_leite_creme', 'Leite-creme'],
      ['de_castro_bolo_choco', 'Bolo de chocolate']
    ])
  },
  {
    id: 'tom', group: 'now', name: 'Time Out Market', place: 'Lisboa',
    text: 'Ao balcão, no Mercado da Ribeira, desde 2014.',
    cover: 'assets/img/restaurantes/time-out-market.jpg',
    link: 'https://www.timeoutmarket.com/lisboa/',
    dishes: dishes('time-out-market', [
      ['2025_MCS_Mercado_Bacalhau_bras_peq', 'Bacalhau à Brás'], ['MCS_Mercado_TO_2025_03_lombo_bacalhau', 'Lombo de bacalhau'],
      ['MCS_Mercado_TO_2025_06_arroz_enchidos', 'Arroz de enchidos'], ['MCS_Mercado_TO_2025_04_vitela', 'Vitela'],
      ['MCS_Mercado_TO_2025_01_lula', 'Lula'], ['MCS_Mercado_TO_2025_05_caldo_verde', 'Caldo verde'],
      ['MCS_Mercado_TO_2025_07_burger', 'Hambúrguer'], ['MCS_Mercado_TO_2025_08_asa_frango', 'Asas de frango'],
      ['MerRib_12'], ['MerRib_13'], ['MerRib_14'], ['MerRib_15'], ['MerRib_16'], ['MerRib_17'], ['MerRib_18'], ['MerRib_19'],
      ['Mercado_Ribeira_02'], ['Mercado_Ribeira_03'], ['Mercado_Ribeira_05'], ['Mercado_Ribeira_08']
    ])
  },
  {
    id: 'ventozelo', group: 'now', name: 'Cantina de Ventozelo', place: 'Douro',
    text: 'A cozinha da região, na Quinta de Ventozelo.',
    cover: 'assets/img/restaurantes/cantina-ventozelo.jpg',
    link: 'https://hotel.quintadeventozelo.pt/cantina',
    dishes: dishes('cantina-ventozelo', [
      ['Cantina_Ventozelo_Almoco_Alcatra-Barosa-Arroz-Tomate', 'Alcatra barrosã, arroz de tomate'],
      ['Cantina_de_Ventozelo_01'], ['MCS_Cantina_004'], ['MCS_Cantina_005'], ['MCS_Cantina_006'], ['MCS_Cantina_007'],
      ['MCS_Cantina_008'], ['MCS_Cantina_009'], ['MCS_Cantina_1'], ['MCS_Cantina_3'], ['MCS_Cantina_001']
    ])
  },
  {
    id: 'bullbear', group: 'archive', name: 'Bull & Bear', place: 'Porto', years: '1997 a 2008',
    text: 'Garfo de Ouro, três Sóis Repsol e um dos 25 melhores da Europa para o Financial Times.',
    cover: 'assets/img/restaurantes/bull-bear.jpg',
    dishes: dishes('bull-bear', [['BB_002'], ['BB_003'], ['BB_004'], ['BB_005']])
  },
  {
    id: 'largo', group: 'archive', name: 'Largo', place: 'Chiado, Lisboa', years: '2010 a 2015',
    text: 'No Largo de São Carlos, no Chiado.',
    cover: C + 'largo/Largo_001.jpg',
    dishes: dishes('largo', [['Largo_002'], ['Largo_003'], ['Largo_004'], ['Largo_005'], ['Largo_006'], ['Largo_007'], ['Largo_008'], ['Largo_009']])
  },
  {
    id: 'less', group: 'archive', name: 'Less', place: 'Príncipe Real, Lisboa', years: '2015 a 2019',
    text: 'No palacete da Embaixada, no Príncipe Real.',
    cover: C + 'less/MCS_LESS_05.jpg',
    dishes: dishes('less', [['MCS_LESS_01'], ['MCS_LESS_02'], ['MCS_LESS_03'], ['MCS_LESS_04'], ['MCS_LESS_05'], ['MCS_LESS_06'], ['MCS_LESS_07'], ['MCS_LESS_08']])
  },
  {
    id: 'decastro', group: 'archive', name: 'deCastro', place: 'Lisboa', years: '2009 a 2014',
    text: 'Petiscos portugueses. Quatro estrelas na Time Out.',
    cover: C + 'decastro-lisboa/deCastro_03.jpg',
    dishes: dishes('decastro-lisboa', [['deCastro_01'], ['deCastro_02'], ['deCastro_03'], ['deCastro_04'], ['deCastro_05'], ['deCastro_07'], ['deCastro_08'], ['deCastro_09'], ['deCastro_10'], ['deCastro_11'], ['deCastro_12']])
  }
];
