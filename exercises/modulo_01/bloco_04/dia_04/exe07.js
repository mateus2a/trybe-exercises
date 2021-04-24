/**
 * Tentei usar um pouco as funções do JavaScript, me baseando nmo código do Wallace Maxters,
 * linkdo StackOverFLow: https://pt.stackoverflow.com/questions/479568/localizar-o-%C3%ADndice-do-maior-e-do-menor-valor-de-um-array
 */
function maxValue() {
  let arr = [2, 4, 6, 7, 10, 0, -3].map(Number);
  let max = Math.max.apply(null, arr);
  

  console.log(arr.indexOf(max));
}

maxValue();


