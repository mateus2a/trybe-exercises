const readlineSync = require('readline-sync');

const sort = () => {
  const randomNumber = Math.floor(Math.random() * 10);

  const playGame = () => {
    const enterYourNumber = readlineSync.question('Enter your number: ');
  
    if (randomNumber == enterYourNumber) {
      console.log('Parabéns, número correto!');
    } else {
      console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
    }
  }
  
  playGame();
  
  const playAgain = readlineSync.question('Play again? ');
  
  if (playAgain === 'yes') {
    playGame();
  } 
}

module.exports = sort;
