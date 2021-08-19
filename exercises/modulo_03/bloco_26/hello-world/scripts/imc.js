const readlineSync = require('readline-sync');

const calc = () => {
  const weight = readlineSync.questionFloat('Qual seu peso? ');
  const height = readlineSync.question('Qual sua altura? ');
  const imc = ((weight / (height  * height)) * 10000).toFixed(2);
  if (imc < 18.5) {
    console.log('Abaixo do peso (magreza')
  } if (imc >= 18.5) {
    console.log('Peso normal')
  } if (imc >= 25.0) {
    console.log('Acima do peso (sobrepeso)')
  } if (imc >= 30.0) {
    console.log('Obesidade grau I')
  } if (imc >= 35.0) {
    console.log('Obesidade grau II')
  } if (imc >= 30.0) {
    console.log('Obesidade graus III e IV')
  }
  
  console.log(imc);
}

module.exports = calc;
