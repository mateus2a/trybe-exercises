/**
 * Achei bem interessante a implentação do zzzzBov e quis trazer para esse exercicio,
 * segue o link do StackOverFlow: https://stackoverflow.com/questions/8934877/obtain-smallest-value-from-array-in-javascript
 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let min = Number.POSITIVE_INFINITY;

for (let index = 0; index < numbers.length; index++) {
  min = Math.min(min, numbers[index]);
}

console.log(min);