/**
 * - Add pictures: (Format: 4:3, 500px wide)
 *    1) Leaves (Incl. flower or fruit)
 *    2) Illustration (Format: 7:5, 500px wide)
 *    3) Flowers
 *    4) Fruits
 */

const plants = [
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
  },
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
    name: 'Eingriffeliger Weißdorn',
    latin: 'Crataegus monogyna',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: ['crataegus_monogyna-wiki.jpg', 'crataegus_monogyna-illustration.jpg'],
    url: ['https://de.wikipedia.org/wiki/Eingriffeliger_Wei%C3%9Fdorn'],
    count: 12
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
  }
];
