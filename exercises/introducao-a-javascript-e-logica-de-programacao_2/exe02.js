/**
 * Para esse bloco de código usei como base o exemplo do Vanil,
 * segue o link do StackOverFlow: https://pt.stackoverflow.com/questions/245998/como-somar-elementos-de-um-array-que-%C3%A9-um-retorno-de-outro-function-em-javascrip
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
}
console.log(sum); 