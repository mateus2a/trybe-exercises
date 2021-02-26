/**
 * Tive um pouco de dificuldade para fazer esse exercicio, então, implementei o 
 * código do Rohit Gaikwad: https://stackoverflow.com/questions/28365737/how-to-print-star-pattern-in-javascript-in-a-very-simple-manner
 */

let base = 5;
let symbol = '*';
let middle = (base - 1);
let inputLine = '';



for (let index = 1; index <= base; index += 1) {
  
  inputLine = inputLine.trim();

  inputLine = ' '.repeat(middle) + inputLine + (index > 1 ? ' ' : '') + symbol;
  console.log(inputLine);
  middle--;
}

