

function numberInt(number) {
  let resultado = 0;

  for (let index = 1; index <= number; index++) {
    resultado += index;
  }
  return resultado;
}

console.log(numberInt(5))
