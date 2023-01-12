const db = require('../config/connection');
const { Tech } = require('../models');

const ProductData = require('./ProductData.json');

db.once('open', async () => {
  await Tech.deleteMany({});

  const technologies = await Tech.insertMany(ProductData);

  console.log('Technologies seeded!');
  process.exit(0);
});
