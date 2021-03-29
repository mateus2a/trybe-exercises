const checkNumber = (myNumber, number) => myNumber === number;

const checkResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Parabéns você ganhou' : 'Tente novamente.';
}

console.log(checkResult(4, checkNumber));