const readlineSync = require('readline-sync');

const velocity = () => {
  const distancia = readlineSync.question('Qual a distancia? ');
  const tempo = readlineSync.question('Qual o tempo? ');
  const velocidade = distancia / tempo;
  console.log(velocidade + ' km/h');
}

module.exports = velocity;
