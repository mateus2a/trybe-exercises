const readline = require('readline-sync');
const imc = require('./scripts/imc');
const sort = require('./scripts/sorteio');
const velocity = require('./scripts/velocidade');


const name = readline.keyInSelect(['IMC', 'Velocity', 'Game'], 'Which script?')

if (name == 1) {
  imc();
}
if (name == 2) {
  sort();
}
if (name == 3) {
  velocity();
}
