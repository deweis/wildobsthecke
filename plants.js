/**
 * - Add pictures: (Format: 4:3, 500px wide)
 *    1) Fruit
 *    2) Illustration (Format: 7:5, 500px wide)
 *    3) Flowers
 *    4) Distribution in Switzerland - infoflora
 */

const plants = [
  {
    name: 'Alpenkreuzdorn',
    latin: 'Rhamnus alpina',
    familie: 'Kreuzdorngewächse',
    famLat: 'Rhamnaceae',
    img: ['rhamnus_alpina-infoflora.jpg', 'rhamnus_alpina-illustration.jpg'],
    url: ['https://de.wikipedia.org/wiki/Kreuzdorn'],
    count: 2
  },
  {
    name: 'Gewöhnliche Felsenbirne',
    latin: 'Amelanchier ovalis',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'amelanchier_ovalis-wiki.jpg',
      'amelanchier_ovalis-illustration.jpg',
      'amelanchier_ovalis-flowers-dwe.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnliche_Felsenbirne'],
    count: 15
  },
  {
    name: 'Felsenkirsche',
    latin: 'Prunus mahaleb',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'prunus_mahaleb-wiki.jpg',
      'prunus_mahaleb-illustration.jpg',
      'prunus_mahaleb-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Steinweichsel'],
    count: 3
  },
  {
    name: 'Kirschpflaume',
    latin: 'Prunus cerasifera',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'prunus_cerasifera-wiki.jpg',
      'prunus_cerasifera-illustration.jpg',
      'prunus_cerasifera-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Kirschpflaume'],
    count: 3
  },
  {
    name: 'Schwarzdorn / Schlehdorn',
    latin: 'Prunus spinosa',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'prunus_spinosa-pixabay.jpg',
      'prunus_spinosa-illustration.jpg',
      'prunus_spinosa-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Schlehdorn'],
    count: 12
  },
  {
    name: 'Gemeiner Schneeball',
    latin: 'Viburnum opulus',
    familie: 'Moschuskrautgewächse',
    famLat: 'Adoxaceae',
    img: [
      'viburnum_opulus-wiki.jpg',
      'viburnum_opulus-illustration.jpg',
      'viburnum_opulus-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnlicher_Schneeball'],
    count: 2
  },
  {
    name: 'Wolliger Schneeball',
    latin: 'Viburnum lantana',
    familie: 'Moschuskrautgewächse',
    famLat: 'Adoxaceae',
    img: [
      'viburnum_lantana-wiki.jpg',
      'viburnum_lantana-illustration.jpg',
      'viburnum_lantana-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Wolliger_Schneeball'],
    count: 2
  },
  {
    name: 'Roter Holunder',
    latin: 'Sambucus racemosa',
    familie: 'Moschuskrautgewächse',
    famLat: 'Adoxaceae',
    img: [
      'sambucus_racemosa-jerseyyards.jpg',
      'sambucus_racemosa-illustration.jpg',
      'sambucus_racemosa-wildseedproject.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Roter_Holunder'],
    count: 2
  },
  {
    name: 'Schwarzer Holunder',
    latin: 'Sambucus nigra',
    familie: 'Moschuskrautgewächse',
    famLat: 'Adoxaceae',
    img: [
      'sambucus_nigra-baumschule-2000.jpg',
      'sambucus_nigra-illustration.jpg',
      'sambucus_nigra-pflanzenbestimmung.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Schwarzer_Holunder'],
    count: 2
  },
  {
    name: 'Kornelkirsche',
    latin: 'Cornus mas',
    familie: 'Hartriegelgewächse',
    famLat: 'Cornaceae',
    img: ['cornus_mas-wiki.jpg', 'cornus_mas-illustration.jpg'],
    url: ['https://de.wikipedia.org/wiki/Kornelkirsche'],
    count: 20
  },
  {
    name: 'Gewöhnliche Berberitze',
    latin: 'Berberis vulgaris',
    familie: 'Berberitzengewächse',
    famLat: 'Berberidaceae',
    img: [
      'berberis_vulgaris-gartenlexikon.jpg',
      'berberis_vulgaris-illustration.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnliche_Berberitze'],
    count: 10
  },
  {
    name: 'Eingriffeliger Weissdorn',
    latin: 'Crataegus monogyna',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'crataegus_monogyna-futureforests.jpg',
      'crataegus_monogyna-illustration.jpg',
      'crataegus_monogyna-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Eingriffeliger_Wei%C3%9Fdorn'],
    count: 12
  },
  {
    name: 'Zweigriffeliger Weissdorn',
    latin: 'Crataegus laevigata',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'crataegus_laevigata-freenatureimages.jpg',
      'crataegus_laevigata-illustration.jpg',
      'crataegus_laevigata-freenatureimages2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Zweigriffeliger_Wei%C3%9Fdorn'],
    count: 2
  },
  {
    name: 'Elsbeere',
    latin: 'Sorbus torminalis',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: ['sorbus_torminalis-wiki.jpg', 'sorbus_torminalis-illustration.jpg'],
    url: ['https://de.wikipedia.org/wiki/Elsbeere'],
    count: 5
  },
  {
    name: 'Mehlbeere',
    latin: 'Sorbus aria',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'sorbus_aria-wiki.jpg',
      'sorbus_aria-illustration.jpg',
      'sorbus_aria-baumschule-horstmann.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Echte_Mehlbeere'],
    count: 5
  },
  {
    name: 'Vogelbeere',
    latin: 'Sorbus aucuparia',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'sorbus_aucuparia-wiki.jpg',
      'sorbus_aucuparia-illustration.jpg',
      'sorbus_aucuparia-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Vogelbeere'],
    count: 5
  },
  {
    name: 'Speierling',
    latin: 'Sorbus domestica',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'sorbus_domestica-wiki.jpg',
      'sorbus_domestica-illustration.jpg',
      'sorbus_domestica-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Speierling'],
    count: 5
  },
  {
    name: 'Faulbaum',
    latin: 'Rhamnus frangula',
    familie: 'Kreuzdorngewächse',
    famLat: 'Rhamnaceae',
    img: [
      'rhamnus_fragula-zdravnitza.jpg',
      'rhamnus_frangula-illustrationjpg.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Faulbaum'],
    count: 2
  },
  {
    name: 'Gemeine Hasel',
    latin: 'Corylus avellana',
    familie: 'Birkengewächse',
    famLat: 'Betulaceae',
    img: ['corylus_avellana-wiki.jpg', 'corylus_avellana-illustration.jpg'],
    url: ['https://de.wikipedia.org/wiki/Gemeine_Hasel'],
    count: 10
  },
  {
    name: 'Grau- / Weiss-Erle',
    latin: 'Alnus incana',
    familie: 'Birkengewächse',
    famLat: 'Betulaceae',
    img: [
      'alnus_incana-wiki.jpg',
      'alnus_incana-illustration.jpg',
      'alnus_incana-rhs.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Grau-Erle'],
    count: 2
  },
  {
    name: 'Grün-Erle',
    latin: 'Alnus viridis',
    familie: 'Birkengewächse',
    famLat: 'Betulaceae',
    img: [
      'alnus_viridis-wiki.jpg',
      'alnus_viridis-illustration.jpg',
      'alnus_viridis-infoflora.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gr%C3%BCn-Erle'],
    count: 2
  },
  {
    name: 'Schwarz-Erle',
    latin: 'Alnus glutinosa',
    familie: 'Birkengewächse',
    famLat: 'Betulaceae',
    img: [
      'alnus_glutinosa-baumportal.jpg',
      'alnus_glutinosa-illustration.jpg',
      'alnus_glutinosa-amazon.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Schwarz-Erle'],
    count: 2
  },
  {
    name: 'Gemeiner Liguster',
    latin: 'Ligustrum vulgare',
    familie: 'Ölbaumgewächse',
    famLat: 'Oleaceae',
    img: [
      'ligustrum_vulgare-treeseedonline.jpg',
      'ligustrum_vulgare-illustration.jpg',
      'ligustrum_vulgare-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnlicher_Liguster'],
    count: 2
  },
  {
    name: 'Korb-Weide',
    latin: 'Salix viminalis',
    familie: 'Weidengewächse',
    famLat: 'Salicaceae',
    img: [
      'salix_viminalis-wiki.jpg',
      'salix_viminalis-illustration.jpg',
      'salix_viminalis-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Korb-Weide'],
    count: 1
  },
  {
    name: 'Purpur-Weide',
    latin: 'Salix purpurea',
    familie: 'Weidengewächse',
    famLat: 'Salicaceae',
    img: [
      'salix_purpurea-wiki.jpg',
      'salix_purpurea-illustration.jpg',
      'salix_purpurea-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Purpur-Weide'],
    count: 1
  },
  {
    name: 'Mispel',
    latin: 'Mespilus germanica',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'mespilus_germanica-wiki.jpg',
      'mespilus_germanica-illustration.jpg',
      'mespilus_germanica-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Mispel'],
    count: 10
  },
  {
    name: 'Pfaffenhütchen', // Gewöhnlicher Spindelstrauch
    latin: 'Euonymus europea',
    familie: 'Spindelbaumgewächse',
    famLat: 'Celastraceae',
    img: [
      'euonymus_europaeus-eggert-baumschulen.jpg',
      'euonymus_europaeus-illustration.jpg',
      'euonymus_europaeus-naturespot.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnlicher_Spindelstrauch'],
    count: 10
  },
  {
    name: 'Sanddorn',
    latin: 'Hippophae rhamnoides',
    familie: 'Ölweidengewächse',
    famLat: 'Elaeagnaceae',
    img: [
      'hippophae_rhamnoides-wiki.jpg',
      'hippophae_rhamnoides-illustration.jpg',
      'hippophae_rhamnoides-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Sanddorn'],
    count: 10
  },
  {
    name: 'Gewöhnliche Waldrebe / Niele',
    latin: 'Clematis vitalba',
    familie: 'Hahnenfussgewächse',
    famLat: 'Ranunculaceae',
    img: [
      'clematis_vitalba-first-nature.jpg',
      'clematis_vitalba-illustration.jpg',
      'clematis_vitalba-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnliche_Waldrebe'],
    count: 5
  },
  {
    name: 'Rote Heckenkirsche',
    latin: 'Lonicera xylosteum',
    familie: 'Geißblattgewächse',
    famLat: 'Caprifoliaceae',
    img: [
      'lonicera_xylosteum-wiki.jpg',
      'lonicera_xylosteum-illustration.jpg',
      'lonicera_xylosteum-wiki2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Rote_Heckenkirsche'],
    count: 2
  },
  {
    name: 'Wildapfel / Holzapfel',
    latin: 'Malus sylvestris',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'malus_sylvestris-euforgen.jpg',
      'malus_sylvestris-illustration.jpg',
      'malus_sylvestris-euforgen2.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Holzapfel'],
    count: 3
  },
  {
    name: 'Wildbirne',
    latin: 'Pyrus pyraster',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'pyrus_pyraster-antropocene.jpg',
      'pyrus_pyraster-illustration.jpg',
      'pyrus_pyraster-fotocommunity.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Wildbirne'],
    count: 3
  },
  {
    name: 'Acker-Rose',
    latin: 'Rosa agrestis',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'rosa_agrestis-astrantias.jpg',
      'rosa_agrestis-illustration.jpg',
      'rosa_agrestis-wiki.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Acker-Rose'],
    count: 1
  },
  {
    name: 'Alpen-Rose',
    latin: 'Rosa pendulina',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: ['rosa_pendulina-wiki.jpg', 'rosa_pendulina-illustration.jpg'],
    url: ['https://de.wikipedia.org/wiki/Gebirgs-Rose'],
    count: 1
  }
];
