const express = require('express')
const app = express()

const adjectives = require('./data/adjectives.json');
const audiences = require('./data/audience.json');
const businesses = require('./data/businesses.json');
const cities = require('./data/cities.json');

const makeRandom = (items) => items[Math.floor(Math.random()*items.length)];

//app.get('/', (req, res) => res.send('Hello World!'))
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
