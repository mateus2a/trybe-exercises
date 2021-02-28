

/**
 * Para essa condição, usei como base o código do Guilherme Nascimento.
 * Segue o link do StackOverFlow: https://pt.stackoverflow.com/questions/64058/saber-se-o-numero-%C3%A9-%C3%ADmpar-ou-par/64059
 */

function verifyIfItIsPair(valueOne, valueTwo, valueThree) {
  if (valueOne % 2 !== 0 || valueTwo % 2 !== 0 || valueThree % 2 !== 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

verifyIfItIsPair(2, 4, 0);
