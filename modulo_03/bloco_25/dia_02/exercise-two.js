function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');
      
    const result = (a + b) * c;

    if (result < 50) {
      return reject('Valor muito baixo');
    }

    resolve(result);
  });
}
function getRandom() {
  return Math.floor(Math.random() * 100 + 1)
}
doMath(getRandom(), getRandom(), getRandom())
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))