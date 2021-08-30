const express = require('express');
const bodyParser = require('body-parser');

const validatePrice = require('./middlewares/validationPrice');
const recipes = require('./apis/recipes.json');

const app = express();

app.use(bodyParser.json());



app.post('/recipes', validatePrice, (req, res) => {

});

app.put('/recipes/:id', validatePrice, (req, res) => {

});

app.listen(3333);