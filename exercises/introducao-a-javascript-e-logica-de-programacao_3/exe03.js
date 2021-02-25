/**
 * Para esse exercicio usei como base a implementação do Jemonge
 * link para o StackOverFlow: https://es.stackoverflow.com/questions/297450/alinear-pir%C3%A1mide-de-asteriscos-javascript 
 */

let n = 5;
let symbol = '*'

for (let i = 0; i < n; i++) {
  let spaces = '';
  for (let j = 1; j < n - i; j++) {
    spaces = spaces + ' ';
    
  }

  for (let j = 0; j < i + 1; j++) {
    spaces = spaces + symbol;
    
  }
  console.log(spaces);
}