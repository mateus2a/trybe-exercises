/**
 * Para esse exercicio usei como base a implementação do Jemonge
 * link para o StackOverFlow: https://es.stackoverflow.com/questions/297450/alinear-pir%C3%A1mide-de-asteriscos-javascript
 */

let line = 5;
let symbol = '*';

for (let i = 0; i < line; i++) {
  let space = '';
  for (let j = 1; j < line - i; j++) {
    space = space + ' ';
  }

  for (let j = 0; j < i + 1; j++) {
    space = space + symbol;
  }
  console.log(space);
}
