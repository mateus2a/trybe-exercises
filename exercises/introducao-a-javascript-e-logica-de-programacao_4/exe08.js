/**
 * Tentei usar um pouco as funções do JavaScript, me baseando nmo código do Wallace Maxters,
 * linkdo StackOverFLow: https://pt.stackoverflow.com/questions/479568/localizar-o-%C3%ADndice-do-maior-e-do-menor-valor-de-um-array
 */
function minValue() {
  let arr = [2, 4, 6, 7, 10, 0, -3].map(Number);
  let min = Math.min.apply(null, arr);
  

  console.log(arr.indexOf(min));
}

minValue();