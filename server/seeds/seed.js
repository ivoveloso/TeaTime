const db = require('../config/connection');
const { Category } = require('../models');

const ProductData = require('./ProductData.json');

db.once('open', async () => {
  await Category.deleteMany({});

  const categories = await Category.insertMany(ProductData);

  console.log('Categories seeded!');
  process.exit(0);
});
