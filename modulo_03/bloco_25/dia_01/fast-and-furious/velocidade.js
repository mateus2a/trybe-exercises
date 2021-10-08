const readlineSync = require('readline-sync');

const distancia = readlineSync.question('Qual a distancia? ');
const tempo = readlineSync.question('Qual o tempo? ');
const velocidade = distancia / tempo;
console.log(velocidade + ' km/h');
