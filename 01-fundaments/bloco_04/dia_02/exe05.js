/**
 * Para este código usei o exemplo implementado por Bacco, segue o link para o
 * StackOverFlow: https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let value = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] > value) {
    value = numbers[index];
  }
  
}
console.log(value);