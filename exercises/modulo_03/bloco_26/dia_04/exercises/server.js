const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Exercise 1
app.get('/ping', (req, res) => {
  res.json( { message: 'pong' } );
});

app.listen(3333, (req, res) => {
  console.log('Rodando na porta 3333');
})