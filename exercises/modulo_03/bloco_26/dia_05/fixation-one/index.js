const express = require('express');
const bodyParser = require('body-parser');

const recipes = require('./apis/recipes.json');

const app = express();

app.use(bodyParser.json());

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (price < 0) res.status(406).json({ "error": "Not Acceptable"});
  if (isNaN(price)) res.status(400).json({ "error": "Bad Request"});

  next();
}

app.post('/recipes', validatePrice, (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(200).json(recipes);
});

app.put('/recipes/:id', validatePrice, (req, res) => {

});

app.listen(3333);