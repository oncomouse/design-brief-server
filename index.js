const express = require('express');
const cors = require('cors');
const app = express();

const adjectives = require('./data/adjectives.json');
const audiences = require('./data/audience.json');
const businesses = require('./data/businesses.json');
const cities = require('./data/cities.json');

const makeRandom = (items) => items[Math.floor(Math.random()*items.length)];
const randomInt = (low,high) => Math.floor(low + Math.random() * (high - 1));
app.use(cors());
app.get('/', (req, res) => {
  const type = makeRandom(Object.keys(businesses));
  const name = makeRandom(businesses[type]);
  const adjs = [];
  const numAdjectives = randomInt(2,5);
  for(let i = 0; i < numAdjectives; i++) {
    adjs.push(makeRandom(adjectives));
  }
  res.json({
    adjectives: adjs,
    audience: makeRandom(audiences),
    business: {
      name,
      type
    },
    city: makeRandom(cities).city
  })
})
app.get('/adjective', (req, res) => res.json(makeRandom(adjectives)));
app.get('/audience', (req, res) => res.json(makeRandom(audiences)));
app.get('/business', (req, res) => {
  const type = makeRandom(Object.keys(businesses));
  res.json({
    type,
    name: makeRandom(businesses[type])
  })
});
app.get('/city', (req, res) => res.json(makeRandom(cities).city));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
