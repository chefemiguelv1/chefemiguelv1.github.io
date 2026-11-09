// Content for each restaurant's own page (#/id): description, details, space photos
// and an accent colour close to each house's identity.
// Texts summarised from the pages of miguelcastrosilva.com. Details to confirm with Miguel.
const C = 'assets/img/casas/';

export const HOUSE_PAGES = {
  casario: {
    theme: '#2E4A62',
    lead: 'Um restaurante, dois chefes.',
    about: [
      'No regresso à cidade onde nasceu, Miguel Castro e Silva assume o Casario a quatro mãos com o chefe José Guedes, depois de seis anos de trabalho conjunto no deCastro Gaia.',
      'Uma cozinha de fine dining confortável, com carta dinâmica que respeita os produtos nacionais e a sua sazonalidade. O foco está nos menus de degustação, harmonizados com os vinhos Dalva, Porto Cruz e Quinta de Ventozelo, e cerca de 60 referências na garrafeira.',
      'O nome vem do casario histórico que rodeia a Gran Cruz House. Além da sala, há esplanada com vista para o Douro, aberta ao público.'
    ],
    facts: [
      ['Morada', 'Praça da Ribeira, Viela do Buraco 19, Porto'],
      ['Telefone', '+351 227 662 270'],
      ['Horário', 'Quarta a sexta, 18h às 23h · Sábado, 12h30 às 23h · Domingo, 12h30 às 18h']
    ],
    spaces: [C + 'casario/Casario_01.jpg', C + 'casario/Casario_05.jpg', C + 'casario/Casario_02.jpg']
  },
  gaia: {
    theme: '#A4532C',
    lead: 'Petiscos portugueses e vinho, à beira do Douro.',
    about: [
      'Na cozinha do Espaço Porto Cruz, em Vila Nova de Gaia, a degustação junta o vinho aos petiscos portugueses, com um toque de modernidade.',
      'Com a orientação de Miguel Castro e Silva e a supervisão do chefe José Guedes, a primazia é dada aos produtos regionais de Portugal. É aqui que vive hoje o conceito deCastro.'
    ],
    facts: [
      ['Morada', 'Av. de Diogo Leite 162, Vila Nova de Gaia'],
      ['Telefone', '+351 910 553 559'],
      ['Email', 'decastrogaia@myportocruz.com'],
      ['Horário', 'Terça a sábado, 12h30 às 16h e 19h30 às 23h · Domingo, 12h30 às 16h']
    ],
    spaces: ['01', '02', '04', '05', '06', '07'].map((n) => C + 'decastro-gaia/deCastro_Gaia_' + n + '.jpg')
      .concat([C + 'decastro-gaia/de_castro_espa_01.jpg', C + 'decastro-gaia/de_castro_espa_02.jpg'])
  },
  tom: {
    theme: '#C8102E',
    lead: 'Cozinha portuguesa ao balcão, no Mercado da Ribeira.',
    about: [
      'Dos petiscos às doçuras, uma cozinha portuguesa com a contemporaneidade na ponta do garfo: a francesinha, o arroz malandrinho, o à Brás ora de carne ora de peixe, e as sopas.',
      'O pão e os queijos abrem e fecham uma refeição descontraída, com uma lista de bebidas onde se destacam bons vinhos.'
    ],
    facts: [
      ['Morada', 'Mercado da Ribeira, loja 10, Av. 24 de Julho 49, Lisboa'],
      ['Horário', 'Todos os dias, 10h às 23h']
    ],
    spaces: [C + 'time-out-market/MCS_Mercado_TO_2025_01.jpg', C + 'time-out-market/MerRib_10.jpg', C + 'time-out-market/MerRib_11.jpg']
  },
  ventozelo: {
    theme: '#5B6B3A',
    lead: 'O Douro numa quinta.',
    quote: 'Quem vai passar uns dias numa quinta tão rica como Ventozelo deve levar consigo um pouco da história gastronómica do Douro.',
    about: [
      'O restaurante do Ventozelo Hotel & Quinta ocupa o lugar onde antigamente comiam os trabalhadores de uma das maiores e mais antigas quintas do Douro.',
      'Durante mais de um ano, Miguel recolheu receituários do Douro e de Trás-os-Montes, em livros antigos e a falar com as pessoas. Ao almoço, pratos de forno e de tacho como se servia na lavoura; ao jantar, um serviço clássico, à francesa.',
      'A cozinha é de quilómetro zero: produtos das hortas da quinta, raças autóctones como a maronesa e o bísaro, e fornecedores vizinhos.'
    ],
    facts: [
      ['Morada', 'Quinta de Ventozelo, Ervedosa do Douro, S. João da Pesqueira'],
      ['Telefone', '+351 254 249 670'],
      ['Email', 'cantina@quintadeventozelo.pt'],
      ['Horário', 'Todos os dias · Almoço, 12h30 às 15h · Jantar, 19h às 22h · Reserva com 24h de antecedência']
    ],
    spaces: ['02', '04', '05', '06', '07'].map((n) => C + 'cantina-ventozelo/Cantina_de_Ventozelo_' + n + '.jpg')
      .concat([C + 'cantina-ventozelo/Cantina_de_Ventozelo_08_2560_sup.jpg', C + 'cantina-ventozelo/Cantina_de_Ventozelo_09_2560_inf.jpg'])
  },
  incomum: {
    theme: '#3C3A37',
    lead: 'Comida de cantina pode ser boa.',
    about: [
      'A cantina nasce de um desafio da Worten, na mudança para o novo escritório: um espaço de conforto, longe da ideia tradicional de refeitório, com comida que faz vontade de ficar.',
      'Uma cozinha muito funcional num espaço pequeno, propostas diárias variadas, 12 a 15 pratos à carta, wraps, sandes e quiches, e um pequeno almoço com panquecas, granola e bolos à fatia.',
      'Em vez da linha de self-service, um atendimento mais próximo e personalizado.'
    ],
    facts: [['Onde', 'Escritórios da Worten']],
    spaces: []
  },
  ideias: {
    theme: '#7A7167',
    lead: 'Criações fora dos restaurantes.',
    about: [
      'Não sendo um restaurante, é o lugar das outras criações do chefe ao longo do percurso: jantares, programas de televisão e festivais.',
      'Do Jantar Essência à Última Ceia, no Canal História, e ao 10’ Fest.'
    ],
    facts: [],
    spaces: []
  },
  bullbear: {
    theme: '#2F4A3A',
    lead: 'Um marco na carreira, no edifício da Bolsa.',
    about: [
      'Inaugurado em 1997, no edifício da Bolsa do Porto. Garfo de Ouro do Expresso em 2003, três Sóis Repsol em 2004 e um dos 25 melhores restaurantes da Europa para o Financial Times.',
      'Palco de muitos jantares vínicos, foi um dos marcos na consolidação da carreira de Miguel Castro e Silva.'
    ],
    facts: [['Anos', '1997 a 2008'], ['Onde', 'Edifício da Bolsa, Porto']],
    spaces: [C + 'bull-bear/BB_001.jpg']
  },
  largo: {
    theme: '#9C7A2E',
    lead: 'Nos claustros do Convento dos Mártires.',
    about: [
      'No Largo de S. Carlos, no Chiado, o restaurante ocupa os antigos claustros do Convento da Igreja dos Mártires: abóbadas de pedra e design de Miguel Câncio Martins.',
      'Uma cozinha tradicional com inspiração em sabores de outras cozinhas do mundo. Foi um projeto de grande sucesso em Lisboa.'
    ],
    facts: [['Anos', '2010 a 2015'], ['Onde', 'Largo de S. Carlos, Chiado, Lisboa']],
    spaces: [C + 'largo/Largo_001.jpg']
  },
  less: {
    theme: '#55705F',
    lead: 'Less is more.',
    about: [
      'A intemporalidade é a receita base da cozinha do Less, inspirada nas viagens do chefe: dos tártaros aos risottos, passando pelo Parmentier.',
      'Clássicos renascidos, de talher em riste ou em modo finger food, com o rigor do fine dining num ambiente descontraído.'
    ],
    facts: [['Anos', '2015 a 2019'], ['Onde', 'Embaixada, Príncipe Real, Lisboa']],
    spaces: []
  },
  decastro: {
    theme: '#8C3B2B',
    lead: 'A cultura da mesa portuguesa.',
    about: [
      'Fiel à cozinha tradicional, os sabores de antigamente com a técnica de hoje. Dos petiscos às sobremesas, uma viagem pelo país de lés a lés.',
      'Um lugar de partilha entre família, amigos e colegas, descontraído e com requinte. Hoje, o conceito continua no deCastro Gaia.'
    ],
    facts: [['Anos', '2009 a 2014'], ['Onde', 'Avenidas Novas, Lisboa']],
    spaces: []
  }
};
