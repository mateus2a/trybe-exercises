const express = require('express');
const simpsons = require('./simpsons');

const app = express();

/* Todas as rotas com /simpsons/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/simpsons', simpsons);

app.listen(3000);