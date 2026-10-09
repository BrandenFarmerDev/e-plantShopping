const collections = [
  {
    id: 'air-purifying', name: 'Air-purifying plants', eyebrow: 'BREATHE A LITTLE EASIER', description: 'Leafy companions that bring fresh energy to your favorite rooms.',
    products: [
      ['monstera-deliciosa','Monstera Deliciosa',32,'Bright, indirect light','Large statement leaves'],
      ['snake-plant','Snake Plant',24,'Low to bright light','Nearly unbothered'],
      ['golden-pothos','Golden Pothos',18,'Low to bright light','Easy trailing vines'],
      ['peace-lily','Peace Lily',29,'Medium indirect light','Elegant white blooms'],
      ['rubber-plant','Rubber Plant',36,'Bright, indirect light','Glossy burgundy leaves'],
      ['areca-palm','Areca Palm',42,'Bright, indirect light','Soft tropical fronds'],
    ],
  },
  {
    id: 'low-light', name: 'Low-light favorites', eyebrow: 'MADE FOR COZY CORNERS', description: 'Beautiful, resilient greens for rooms with softer sunlight.',
    products: [
      ['zz-plant','ZZ Plant',27,'Low to medium light','Glossy sculptural stems'],
      ['cast-iron-plant','Cast Iron Plant',31,'Low to medium light','A wonderfully hardy classic'],
      ['heartleaf-philodendron','Heartleaf Philodendron',19,'Low to bright light','Sweet heart-shaped leaves'],
      ['chinese-evergreen','Chinese Evergreen',34,'Low to medium light','Silver-patterned foliage'],
      ['bird-nest-fern','Bird’s Nest Fern',28,'Low to medium light','Fresh rippled fronds'],
      ['parlor-palm','Parlor Palm',26,'Low to medium light','Compact and graceful'],
    ],
  },
  {
    id: 'pet-friendly', name: 'Pet-friendly picks', eyebrow: 'A LITTLE GREEN FOR EVERYONE', description: 'Lovely, non-toxic varieties for homes shared with curious pets.',
    products: [
      ['calathea-orbifolia','Calathea Orbifolia',38,'Medium indirect light','Satin-striped leaves'],
      ['boston-fern','Boston Fern',25,'Bright, indirect light','Airy cascading fronds'],
      ['spider-plant','Spider Plant',20,'Bright, indirect light','Playful arching foliage'],
      ['peperomia-obtusifolia','Baby Rubber Plant',22,'Medium indirect light','Compact rounded leaves'],
      ['bamboo-palm','Bamboo Palm',44,'Bright, indirect light','A gentle tropical screen'],
      ['prayer-plant','Prayer Plant',33,'Medium indirect light','Beautifully patterned leaves'],
    ],
  },
];

const palettes = [
  ['#e8efe0','#718f68','#93ae7c','#cf9b68','#e8d9c2'],
  ['#ece9dc','#557d59','#789b70','#bf8961','#e6d4bb'],
  ['#e2eee9','#56806b','#83a883','#cc9b68','#e6ddca'],
  ['#f0e8dd','#66845f','#9caf7b','#c47e5e','#ded0bd'],
  ['#e8ecdf','#5d7852','#96a979','#ba805c','#e6d9c5'],
  ['#e7eee5','#4e7c68','#83a785','#c48a64','#e7d7bf'],
  ['#eeeadf','#607958','#8fa777','#c28e69','#e3d6c4'],
  ['#e7ece5','#587c62','#8da982','#cb9162','#e7d5be'],
  ['#ececdf','#69835a','#a2b681','#bd825d','#e5d9c5'],
  ['#e9eee7','#557764','#87a982','#c78c69','#e2d5c3'],
  ['#efe9e1','#5c826d','#8eaa87','#c38764','#ead9c3'],
  ['#e4ede5','#6d8c6d','#a2b58a','#bf8968','#e8dac6'],
  ['#eee9df','#627d60','#9eb18b','#c27e60','#e1d4c2'],
  ['#e7eee9','#547b66','#8eaa83','#c99267','#e8dbc8'],
  ['#eeeadd','#68845f','#99b077','#c38360','#e7d8c5'],
  ['#e7eee5','#5a8061','#8da67e','#c68a65','#e8dbc7'],
  ['#eee9df','#51785f','#91ac84','#bd825c','#e3d4bf'],
  ['#e6eee8','#5c8268','#9bb08a','#c58a62','#e5d7c2'],
];
const products = collections.flatMap((group, groupIndex) => group.products.map((row, itemIndex) => {
  const index = groupIndex * 6 + itemIndex;
  return {
    id: row[0], name: row[1], price: row[2], light: row[3], note: row[4],
    categoryId: group.id, category: group.name, image: `${import.meta.env.BASE_URL}plants/${row[0]}.svg`, palette: palettes[index],
  };
}));
export { collections, products };
