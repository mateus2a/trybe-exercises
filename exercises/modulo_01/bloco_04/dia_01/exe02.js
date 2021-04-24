
function higherNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else if (numberOne < numberTwo) {
    return numberTwo;
  } else if (numberOne == numberTwo){
    console.log('Os números são iguais');
  } else {
    console.log('Não se aplica');
  }
}

console.log(higherNumber(10, 30));
