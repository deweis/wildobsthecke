/**
 * - Add pictures: (Format: 4:3, 500px wide)
 *    1) Fruit
 *    2) Illustration (Format: 7:5, 500px wide)
 *    3) Flowers
 *    4) Distribution in Switzerland - infoflora (2019, 50km, 4:3)
 *
 * - Add Fruits from Pavel: https://www.albisboden.ch/PDF/Essbares_Wildobst.pdf
 *
 * - Main Data from https://www.infoflora.ch and pics from wiki
 *
 *
 * Next to be added:
 *  - https://de.wikipedia.org/wiki/Liste_von_Wildfr%C3%BCchten
 *  - https://de.wikipedia.org/wiki/Echte_Feige
 *  - https://de.wikipedia.org/wiki/Quitte
 *  - https://de.wikipedia.org/wiki/Chinesische_Zierquitte
 *  - https://de.wikipedia.org/wiki/Himbeere
 *  - https://de.wikipedia.org/wiki/Brombeeren
 *  - https://de.wikipedia.org/wiki/H%C3%A4nge-Birke
 */

const plants = [
  {
    name: 'Gewöhnliche Felsenbirne',
    latin: 'Amelanchier ovalis',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'amelanchier_ovalis-fruits-DWE.jpg',
      'amelanchier_ovalis-illustration.jpg',
      'amelanchier_ovalis-flowers-DWE.jpg',
      'amelanchier_ovalis-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnliche_Felsenbirne'],
    count: 15,
    flowering: [4, 5]
  },
  {
    name: 'Kupfer-Felsenbirne',
    latin: 'Amelanchier lamarckii',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'amelanchier_lamarckii-wiki.jpg',
      'amelanchier_lamarckii-illustration.jpg',
      'amelanchier_lamarckii-wiki2.jpg',
      'amelanchier_lamarckii-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Kupfer-Felsenbirne'],
    count: 0,
    flowering: [4, 5]
  },
  {
    name: 'Felsenkirsche',
    latin: 'Prunus mahaleb',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'prunus_mahaleb-wiki.jpg',
      'prunus_mahaleb-illustration.jpg',
      'prunus_mahaleb-wiki2.jpg',
      'prunus_mahaleb-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Steinweichsel'],
    count: 3,
    flowering: [4, 5]
  },
  {
    name: 'Kirschpflaume',
    latin: 'Prunus cerasifera',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'prunus_cerasifera-wiki.jpg',
      'prunus_cerasifera-illustration.jpg',
      'prunus_cerasifera-wiki2.jpg',
      'prunus_cerasifera-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Kirschpflaume'],
    count: 3,
    flowering: [3, 4]
  },
  {
    name: 'Sauerkirsche / Weichsel',
    latin: 'Prunus cerasus',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'prunus_cerasus-wiki.jpg',
      'prunus_cerasus-illustration.jpg',
      'prunus_cerasus-wiki2.jpg',
      'prunus_cerasus-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Sauerkirsche'],
    count: 0,
    flowering: [4, 5]
  },
  {
    name: 'Schwarzdorn / Schlehdorn',
    latin: 'Prunus spinosa',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'prunus_spinosa-pixabay.jpg',
      'prunus_spinosa-illustration.jpg',
      'prunus_spinosa-wiki2.jpg',
      'prunus_spinosa-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Schlehdorn'],
    count: 12,
    flowering: [4]
  },
  {
    name: 'Gewöhnliche Traubenkirsche',
    latin: 'Prunus padus',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'prunus_padus-ifl.bayern.jpg',
      'prunus_padus-illustration.jpg',
      'prunus_padus-wiki.jpg',
      'prunus_padus-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnliche_Traubenkirsche'],
    count: 0,
    flowering: [4, 5, 6]
  },
  {
    name: 'Spätblühende Traubenkirsche',
    latin: 'Prunus serotina',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'prunus_serotina-euregio-im-bild.jpg',
      'prunus_serotina-illustration.jpg',
      'prunus_serotina-leelanaucd.jpg',
      'prunus_serotina-ch2017.jpg'
    ],
    url: [
      'https://de.wikipedia.org/wiki/Sp%C3%A4tbl%C3%BChende_Traubenkirsche'
    ],
    count: 0,
    flowering: [5, 6]
  },
  {
    name: 'Vogelkirsche / Süsskirsche',
    latin: 'Prunus avium',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'prunus_avium-gartenwelt-meissner.jpg',
      'prunus_avium-illustration.jpg',
      'prunus_avium-pflanzenbestimmung.jpg',
      'prunus_avium-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Vogel-Kirsche'],
    count: 0,
    flowering: [4, 5]
  },
  {
    name: 'Zwerg-/ Steppen-Kirsche',
    latin: 'Prunus fruticosa',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'prunus_fruticosa-wiki.jpg',
      'prunus_fruticosa-illustration.jpg',
      'prunus_fruticosa-wiki2.jpg',
      'prunus_fruticosa-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Zwerg-Kirsche'],
    count: 0,
    flowering: [4, 5]
  },
  {
    name: 'Schwarze Apfelbeere / Indianerbeere',
    latin: 'Aronia melanocarpa',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'aronia_melanocarpa-asklepios-seeds.jpg',
      'aronia_melanocarpa-illustration.jpg',
      'aronia_melanocarpa-susanna-komischke.jpg',
      'aronia_melanocarpa-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Schwarze_Apfelbeere'],
    count: 0,
    flowering: [5]
  },
  {
    name: 'Gemeiner Schneeball',
    latin: 'Viburnum opulus',
    familie: 'Moschuskrautgewächse',
    famLat: 'Adoxaceae',
    img: [
      'viburnum_opulus-wiki.jpg',
      'viburnum_opulus-illustration.jpg',
      'viburnum_opulus-wiki2.jpg',
      'viburnum_opulus-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnlicher_Schneeball'],
    count: 2,
    flowering: [5, 6]
  },
  {
    name: 'Wolliger Schneeball',
    latin: 'Viburnum lantana',
    familie: 'Moschuskrautgewächse',
    famLat: 'Adoxaceae',
    img: [
      'viburnum_lantana-wiki.jpg',
      'viburnum_lantana-illustration.jpg',
      'viburnum_lantana-wiki2.jpg',
      'viburnum_lantana-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Wolliger_Schneeball'],
    count: 2,
    flowering: [5]
  },
  {
    name: 'Schwarze Maulbeere',
    latin: 'Morus nigra',
    familie: 'Maulbeergewächse',
    famLat: 'Moraceae',
    img: [
      'morus_nigra-jardins-du-monde.jpg',
      'morus_nigra-illustration.jpg',
      'morus_nigra-youtube.jpg',
      'morus_nigra-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Schwarze_Maulbeere'],
    count: 0,
    flowering: [5]
  },
  {
    name: 'Roter Holunder',
    latin: 'Sambucus racemosa',
    familie: 'Moschuskrautgewächse',
    famLat: 'Adoxaceae',
    img: [
      'sambucus_racemosa-jerseyyards.jpg',
      'sambucus_racemosa-illustration.jpg',
      'sambucus_racemosa-wildseedproject.jpg',
      'sambucus_racemosa-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Roter_Holunder'],
    count: 2,
    flowering: [4, 5]
  },
  {
    name: 'Schwarzer Holunder',
    latin: 'Sambucus nigra',
    familie: 'Moschuskrautgewächse',
    famLat: 'Adoxaceae',
    img: [
      'sambucus_nigra-baumschule-2000.jpg',
      'sambucus_nigra-illustration.jpg',
      'sambucus_nigra-pflanzenbestimmung.jpg',
      'sambucus_nigra-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Schwarzer_Holunder'],
    count: 2,
    flowering: [5, 6]
  },
  {
    name: 'Kornelkirsche',
    latin: 'Cornus mas',
    familie: 'Hartriegelgewächse',
    famLat: 'Cornaceae',
    img: [
      'cornus_mas-wiki.jpg',
      'cornus_mas-illustration.jpg',
      'cornus_mas-wiki2.jpg',
      'cornus_mas-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Kornelkirsche'],
    count: 20,
    flowering: [3]
  },
  {
    name: 'Roter Hartriegel',
    latin: 'Cornus sanguinea',
    familie: 'Hartriegelgewächse',
    famLat: 'Cornaceae',
    img: [
      'cornus_sanguinea-naturespot.jpg',
      'cornus_sanguinea-illustration.jpg',
      'cornus_sanguinea-bob-gibbons.jpg',
      'cornus_sanguinea-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Roter_Hartriegel'],
    count: 0,
    flowering: [5]
  },
  {
    name: 'Gemeiner Bocksdorn / Goji-Beere',
    latin: 'Lycium barbarum',
    familie: 'Nachtschattengewächse',
    famLat: 'Solanaceae',
    img: [
      'lycium_barbarum-shutterstock.jpg',
      'lycium_barbarum-illustration.jpg',
      'lycium_barbarum-petasandwings.jpg',
      'lycium_barbarum-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gemeiner_Bocksdorn'],
    count: 0,
    flowering: [6, 7, 8]
  },
  {
    name: 'Gewöhnliche Berberitze / Sauerdorn',
    latin: 'Berberis vulgaris',
    familie: 'Berberitzengewächse',
    famLat: 'Berberidaceae',
    img: [
      'berberis_vulgaris-gartenlexikon.jpg',
      'berberis_vulgaris-illustration.jpg',
      'berberis_vulgaris-eggert-baumschulen.jpg',
      'berberis_vulgaris-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnliche_Berberitze'],
    count: 10,
    flowering: [5, 6]
  },
  {
    name: 'Gewöhnliche Mahonie',
    latin: 'Berberis aquifolium',
    familie: 'Berberitzengewächse',
    famLat: 'Berberidaceae',
    img: [
      'berberis_aquifolium-fruits-DWE.jpg',
      'berberis_aquifolium-illustration.jpg',
      'berberis_aquifolium-wikimedia.jpg',
      'berberis_aquifolium-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnliche_Mahonie'],
    count: 0,
    flowering: [3, 4, 5, 6]
  },
  {
    name: 'Eingriffeliger Weissdorn',
    latin: 'Crataegus monogyna',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'crataegus_monogyna-futureforests.jpg',
      'crataegus_monogyna-illustration.jpg',
      'crataegus_monogyna-wiki2.jpg',
      'crataegus_monogyna-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Eingriffeliger_Wei%C3%9Fdorn'],
    count: 12,
    flowering: [5, 6]
  },
  {
    name: 'Zweigriffeliger Weissdorn',
    latin: 'Crataegus laevigata',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'crataegus_laevigata-freenatureimages.jpg',
      'crataegus_laevigata-illustration.jpg',
      'crataegus_laevigata-freenatureimages2.jpg',
      'crataegus_laevigata-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Zweigriffeliger_Wei%C3%9Fdorn'],
    count: 2,
    flowering: [4, 5]
  },
  {
    name: 'Elsbeere',
    latin: 'Sorbus torminalis',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'sorbus_torminalis-wiki.jpg',
      'sorbus_torminalis-illustration.jpg',
      'sorbus_torminalis-naturespot.jpg',
      'sorbus_torminalis-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Elsbeere'],
    count: 5,
    flowering: [5]
  },
  {
    name: 'Mehlbeere',
    latin: 'Sorbus aria',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'sorbus_aria-wiki.jpg',
      'sorbus_aria-illustration.jpg',
      'sorbus_aria-baumschule-horstmann.jpg',
      'sorbus_aria-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Echte_Mehlbeere'],
    count: 5,
    flowering: [5]
  },
  {
    name: 'Vogelbeere',
    latin: 'Sorbus aucuparia',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'sorbus_aucuparia-wiki.jpg',
      'sorbus_aucuparia-illustration.jpg',
      'sorbus_aucuparia-wiki2.jpg',
      'sorbus_aucuparia-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Vogelbeere'],
    count: 5,
    flowering: [5, 6]
  },
  {
    name: 'Speierling',
    latin: 'Sorbus domestica',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'sorbus_domestica-wiki.jpg',
      'sorbus_domestica-illustration.jpg',
      'sorbus_domestica-wiki2.jpg',
      'sorbus_domestica-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Speierling'],
    count: 5,
    flowering: [5, 6, 7]
  },
  {
    name: 'Japanische Zierquitte',
    latin: 'Chaenomeles japonica',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'chaenomeles_japonica-etsy.jpg',
      'chaenomeles_japonica-illustration.jpg',
      'chaenomeles_japonica-wiki2.jpg',
      'chaenomeles_japonica_ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Japanische_Zierquitte'],
    count: 0,
    flowering: [3, 4]
  },
  {
    name: 'Alpenkreuzdorn',
    latin: 'Rhamnus alpina',
    familie: 'Kreuzdorngewächse',
    famLat: 'Rhamnaceae',
    img: [
      'rhamnus_alpina-wiki.jpg',
      'rhamnus_alpina-illustration.jpg',
      'rhamnus_alpina-infoflora.jpg',
      'rhamnus_alpina-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Kreuzdorn'],
    count: 2,
    flowering: [5, 6]
  },
  {
    name: 'Faulbaum',
    latin: 'Rhamnus frangula',
    familie: 'Kreuzdorngewächse',
    famLat: 'Rhamnaceae',
    img: [
      'rhamnus_frangula-zdravnitza.jpg',
      'rhamnus_frangula-illustrationjpg.jpg',
      'rhamnus_frangula-awl.jpg',
      'rhamnus_frangula-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Faulbaum'],
    count: 2,
    flowering: [5, 6]
  },
  {
    name: 'Reichblütige- / Essbare Ölweide',
    latin: 'Elaeagnus multiflora',
    familie: 'Ölweidengewächse',
    famLat: 'Elaeagnaceae',
    img: [
      'elaeagnus_multiflora-kornelkirsche.jpg',
      'elaeagnus_multiflora-illustration.jpg',
      'elaeagnus_multiflora-baumschule-horstmann.jpg',
      'elaeagnus_multiflora-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Reichbl%C3%BCtige_%C3%96lweide'],
    count: 0,
    flowering: [5, 6]
  },
  {
    name: 'Gemeiner Erbsenstrauch',
    latin: 'Caragana arborescens',
    familie: 'Hülsenfrüchtler',
    famLat: 'Fabaceae',
    img: [
      'caragana_arborescens-wiki.jpg',
      'caragana_arborescens-illustration.jpg',
      'caragana_arborescens-wiki2.jpg',
      'caragana_arborescens-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gemeiner_Erbsenstrauch'],
    count: 0,
    flowering: [5, 6, 7]
  },
  {
    name: 'Gemeine Hasel',
    latin: 'Corylus avellana',
    familie: 'Birkengewächse',
    famLat: 'Betulaceae',
    img: [
      'corylus_avellana-wiki.jpg',
      'corylus_avellana-illustration.jpg',
      'corylus_avellana-DWE.jpg',
      'corylus_avellana-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gemeine_Hasel'],
    count: 10,
    flowering: [2, 3, 4]
  },
  {
    name: 'Grau- / Weiss-Erle',
    latin: 'Alnus incana',
    familie: 'Birkengewächse',
    famLat: 'Betulaceae',
    img: [
      'alnus_incana-wiki.jpg',
      'alnus_incana-illustration.jpg',
      'alnus_incana-rhs.jpg',
      'alnus_incana-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Grau-Erle'],
    count: 2,
    flowering: [2, 3, 4]
  },
  {
    name: 'Grün-Erle',
    latin: 'Alnus viridis',
    familie: 'Birkengewächse',
    famLat: 'Betulaceae',
    img: [
      'alnus_viridis-wiki.jpg',
      'alnus_viridis-illustration.jpg',
      'alnus_viridis-infoflora.jpg',
      'alnus_viridis-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gr%C3%BCn-Erle'],
    count: 2,
    flowering: [4, 5, 6]
  },
  {
    name: 'Schwarz-Erle',
    latin: 'Alnus glutinosa',
    familie: 'Birkengewächse',
    famLat: 'Betulaceae',
    img: [
      'alnus_glutinosa-baumportal.jpg',
      'alnus_glutinosa-illustration.jpg',
      'alnus_glutinosa-amazon.jpg',
      'alnus_glutinosa-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Schwarz-Erle'],
    count: 2,
    flowering: [2, 3, 4]
  },
  {
    name: 'Gemeiner Liguster',
    latin: 'Ligustrum vulgare',
    familie: 'Ölbaumgewächse',
    famLat: 'Oleaceae',
    img: [
      'ligustrum_vulgare-treeseedonline.jpg',
      'ligustrum_vulgare-illustration.jpg',
      'ligustrum_vulgare-wiki2.jpg',
      'ligustrum_vulgare-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnlicher_Liguster'],
    count: 2,
    flowering: [5, 6, 7]
  },
  {
    name: 'Korb-Weide',
    latin: 'Salix viminalis',
    familie: 'Weidengewächse',
    famLat: 'Salicaceae',
    img: [
      'salix_viminalis-wiki.jpg',
      'salix_viminalis-illustration.jpg',
      'salix_viminalis-wiki2.jpg',
      'salix_viminalis-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Korb-Weide'],
    count: 1,
    flowering: [3, 4]
  },
  {
    name: 'Purpur-Weide',
    latin: 'Salix purpurea',
    familie: 'Weidengewächse',
    famLat: 'Salicaceae',
    img: [
      'salix_purpurea-wiki.jpg',
      'salix_purpurea-illustration.jpg',
      'salix_purpurea-wiki2.jpg',
      'salix_purpurea-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Purpur-Weide'],
    count: 1,
    flowering: [3, 4, 5, 6]
  },
  {
    name: 'Reif-Weide',
    latin: 'Salix daphnoides',
    familie: 'Weidengewächse',
    famLat: 'Salicaceae',
    img: [
      'salix_daphnoides-wiki.jpg',
      'salix_daphnoides-illustration.jpg',
      'salix_daphnoides-infoflora.jpg',
      'salix_daphnoides-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Reif-Weide'],
    count: 1,
    flowering: [3, 4]
  },
  {
    name: 'Sal-Weide',
    latin: 'Salix caprea',
    familie: 'Weidengewächse',
    famLat: 'Salicaceae',
    img: [
      'salix_caprea-wiki.jpg',
      'salix_caprea-illustration.jpg',
      'salix_caprea-wiki2.jpg',
      'salix_caprea-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Sal-Weide'],
    count: 1,
    flowering: [3, 4, 5]
  },
  {
    name: 'Schwarz-Weide',
    latin: 'Salix nigricans',
    familie: 'Weidengewächse',
    famLat: 'Salicaceae',
    img: [
      'salix_nigricans-futureplanter.jpg',
      'salix_nigricans-illustration.jpg',
      'salix_nigricans-wiki2.jpg',
      'salix_nigricans-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Schwarz-Weide'],
    count: 1,
    flowering: [4, 5, 6]
  },
  {
    name: 'Mispel',
    latin: 'Mespilus germanica',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'mespilus_germanica-wiki.jpg',
      'mespilus_germanica-illustration.jpg',
      'mespilus_germanica-wiki2.jpg',
      'mespilus_germanica-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Mispel'],
    count: 10,
    flowering: [5, 6]
  },
  {
    name: 'Pfaffenhütchen', // Gewöhnlicher Spindelstrauch
    latin: 'Euonymus europaeus',
    familie: 'Spindelbaumgewächse',
    famLat: 'Celastraceae',
    img: [
      'euonymus_europaeus-eggert-baumschulen.jpg',
      'euonymus_europaeus-illustration.jpg',
      'euonymus_europaeus-naturespot.jpg',
      'euonymus_europaeus-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnlicher_Spindelstrauch'],
    count: 10,
    flowering: [5, 6, 7]
  },
  {
    name: 'Sanddorn',
    latin: 'Hippophae rhamnoides',
    familie: 'Ölweidengewächse',
    famLat: 'Elaeagnaceae',
    img: [
      'hippophae_rhamnoides-wiki.jpg',
      'hippophae_rhamnoides-illustration.jpg',
      'hippophae_rhamnoides-wiki2.jpg',
      'hippophae_rhamnoides-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Sanddorn'],
    count: 10,
    flowering: [4, 5]
  },
  {
    name: 'Gewöhnliche Waldrebe / Niele',
    latin: 'Clematis vitalba',
    familie: 'Hahnenfussgewächse',
    famLat: 'Ranunculaceae',
    img: [
      'clematis_vitalba-first-nature.jpg',
      'clematis_vitalba-illustration.jpg',
      'clematis_vitalba-wiki2.jpg',
      'clematis_vitalba-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gew%C3%B6hnliche_Waldrebe'],
    count: 5,
    flowering: [7, 8]
  },
  {
    name: 'Rote Heckenkirsche',
    latin: 'Lonicera xylosteum',
    familie: 'Geißblattgewächse',
    famLat: 'Caprifoliaceae',
    img: [
      'lonicera_xylosteum-wiki.jpg',
      'lonicera_xylosteum-illustration.jpg',
      'lonicera_xylosteum-wiki2.jpg',
      'lonicera_xylosteum-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Rote_Heckenkirsche'],
    count: 2,
    flowering: [4, 5]
  },
  {
    name: 'Schwarze Heckenkirsche',
    latin: 'Lonicera nigra',
    familie: 'Geißblattgewächse',
    famLat: 'Caprifoliaceae',
    img: [
      'lonicera_nigra-wiki.jpg',
      'lonicera_nigra-illustration.jpg',
      'lonicera_nigra-wiki2.jpg',
      'lonicera_nigra-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Schwarze_Heckenkirsche'],
    count: 2,
    flowering: [5, 6]
  },
  {
    name: 'Wildapfel / Holzapfel',
    latin: 'Malus sylvestris',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'malus_sylvestris-euforgen.jpg',
      'malus_sylvestris-illustration.jpg',
      'malus_sylvestris-euforgen2.jpg',
      'malus_sylvestris-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Holzapfel'],
    count: 3,
    flowering: [5]
  },
  {
    name: 'Wildbirne',
    latin: 'Pyrus pyraster',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'pyrus_pyraster-antropocene.jpg',
      'pyrus_pyraster-illustration.jpg',
      'pyrus_pyraster-fotocommunity.jpg',
      'pyrus_pyraster-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Wildbirne'],
    count: 3,
    flowering: [4, 5]
  },
  {
    name: 'Nashi-Birne',
    latin: 'Pyrus pyrifolia',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'pyrus_pyrifolia-wiki.jpg',
      'pyrus_pyrifolia-illustration.jpg',
      'pyrus_pyrifolia-wiki2.jpg',
      'pyrus_pyrifolia-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Nashi-Birne'],
    count: 0,
    flowering: [4, 5]
  },
  {
    name: 'Acker-Rose',
    latin: 'Rosa agrestis',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'rosa_agrestis-astrantias.jpg',
      'rosa_agrestis-illustration.jpg',
      'rosa_agrestis-wiki.jpg',
      'rosa_agrestis-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Acker-Rose'],
    count: 1,
    flowering: [6, 7]
  },
  {
    name: 'Alpen-Rose',
    latin: 'Rosa pendulina',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'rosa_pendulina-pixels.jpg',
      'rosa_pendulina-illustration.jpg',
      'rosa_pendulina-wiki.jpg',
      'rosa_pendulina-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Gebirgs-Rose'],
    count: 1,
    flowering: [6, 7]
  },
  {
    name: 'Apfel-Rose',
    latin: 'Rosa villosa',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'rosa_villosa-florealpes.jpg',
      'rosa_villosa-illustration.jpg',
      'rosa_villosa-wiki.jpg',
      'rosa_villosa-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Apfel-Rose'],
    count: 1,
    flowering: [6]
  },
  {
    name: 'Bereifte Rose',
    latin: 'Rosa glauca',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'rosa_glauca-davidaustinroses.jpg',
      'rosa_glauca-illustration.jpg',
      'rosa_glauca-flowerwalks.jpg',
      'rosa_glauca-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Rotblatt-Rose'],
    count: 1,
    flowering: [6, 7]
  },
  {
    name: 'Hunds-Rose (Hecken-Rose)',
    latin: 'Rosa canina',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'rosa_canina-wiki.jpg',
      'rosa_canina-illustration.jpg',
      'rosa_canina-baumschule-horstmann.jpg',
      'rosa_canina-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Hunds-Rose'],
    count: 1,
    flowering: [6]
  },
  {
    name: 'Busch-Rose (Hecken-Rose)',
    latin: 'Rosa corymbifera',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'rosa_corymbifera-i-flora.jpg',
      'rosa_corymbifera-illustration.jpg',
      'rosa_corymbifera-i-flora2.jpg',
      'rosa_corymbifera-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Hecken-Rose'],
    count: 1,
    flowering: [6]
  },
  {
    name: 'Wein-Rose',
    latin: 'Rosa rubiginosa',
    familie: 'Rosengewächse',
    famLat: 'Rosaceae',
    img: [
      'rosa_rubiginosa-researchgate.jpg',
      'rosa_rubiginosa-illustration.jpg',
      'rosa_rubiginosa-native-plants.jpg',
      'rosa_rubiginosa-ch2017.jpg'
    ],
    url: ['https://de.wikipedia.org/wiki/Wein-Rose'],
    count: 1,
    flowering: [6, 7]
  }
];
