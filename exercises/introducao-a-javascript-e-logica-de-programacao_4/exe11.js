/**
 * Me baseei um pouco no código do Maiki Rodrigues, link do StackOverFlow:
 * https://pt.stackoverflow.com/questions/457749/como-criar-uma-fun%C3%A7%C3%A3o-fatorial-usando-o-contador-for
 */

function numberInt(number) {
  let result = 0;

  for (let index = 1; index <= number; index++) {
    result += index;
  }
  return result;
}

console.log(numberInt(5))
