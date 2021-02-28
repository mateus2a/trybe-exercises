
function verifyIfItIsPair(valueOne, valueTwo, valueThree) {
  if (valueOne % 2 == 0 || valueTwo % 2 == 0 || valueThree % 2 == 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

verifyIfItIsPair(1, 5, 3);
