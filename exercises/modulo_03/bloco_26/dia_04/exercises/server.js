const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const readFile = require('./readFiles');

const app = express();
app.use(bodyParser.json());

// Exercise 1
app.get('/ping', (req, res) => {
  res.json( { message: 'pong' } );
});

// Exercise 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json( { "name": `Hello, ${name}` } );
});

// Exercise 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) res.status(200).json({ "message": `Hello, ${name}!` });
  if (age <= 17) res.status(401).json({ "message": "Unauthorized" });
});

// Exercise 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});

// Exercise 5
app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await readFile();
  res.status(200).json(simpsons);
}));

app.listen(3333, (req, res) => {
  console.log('Rodando na porta 3333');
})