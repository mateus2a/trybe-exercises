
function higherNumberOfThree(numberOne, numberTwo, numberThree) {
  if (numberOne > numberTwo && numberOne > numberThree) {
    console.log('O maior número é ' + numberOne);
  } else if (numberTwo > numberOne && numberTwo > numberThree) {
    console.log('O maior número é ' + numberTwo)
  } else if (numberThree > numberOne && numberThree > numberTwo) {
    console.log('O maior número é ' + numberThree)
  } else {
    console.log('Não se aplica');
  }
}


higherNumberOfThree(5, 10, 1);
