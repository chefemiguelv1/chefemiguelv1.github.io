// Miguel's wines: blends he selects and signs ("Lote Miguel Castro e Silva").
// Texts and photos from miguelcastrosilva.com/vinhos-de-mcs and each wine's page.
const V = 'assets/img/vinhos/';

export const WINES_INTRO = {
  img: V + 'MCS_VINHOS.jpg',
  quote: 'Na cozinha são os aromas que me seduzem e tento combinar de forma a encontrar harmonias. Foi assim que abordei este desafio: fazer lotes com personalidade e elegância.'
};

export const WINES = [
  { name: 'Quinta de Ventozelo Field Blend', region: 'Douro DOC', img: V + 'MCS_VINHOS_Ventozelo_Field_Blend_02.jpg',
    text: 'Branco de Tinta Roriz, Viosinho e Rabigato; tinto de Tinta Amarela, Tinta Roriz e Alicante Bouschet. Vinhas escolhidas por ele na Quinta.' },
  { name: 'Quinta de Ventozelo Varietais', region: 'Douro DOC', img: V + 'MCS_VINHOS_Ventozelo_varietais.jpg',
    text: 'Um Viosinho (DOC Douro) e um Syrah (IGP Duriense), com o lote final selecionado por ele.' },
  { name: 'Dalva Porto', region: 'Porto DOC', img: V + 'MCS_VINHOS_dalva_03.jpg',
    text: 'Um Porto Branco mais seco e aberto, das Caves C. da Silva, pensado para degustar à mesa.' },
  { name: 'Ribeiro Santo', region: 'Dão DOC', img: V + 'MCS_VINHOS_ribeiro_santo_2.jpg',
    text: 'Branco de Malvasia Fina e Encruzado; tinto de Touriga Nacional, Alfrocheiro e Tinta Roriz. Produtor Carlos Lucas.' },
  { name: 'Rui Reguinga', region: 'Alentejo, Portalegre', img: V + 'MCS_VINHOS_rui_reguinga_2.jpg',
    text: 'Branco de Arinto, Fernão Pires e Roupeiro; tinto de Aragonez, Trincadeira e Alicante Bouschet. Com o enólogo Rui Reguinga.' }
];
