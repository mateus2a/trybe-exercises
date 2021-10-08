// Part I - 1
const testingScope = (escopo) => {
  if (escopo === true) {
    var ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}

//testingScope(true);

// Part I - 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => {
  return array = array.sort((a, b) => a - b);
}

//console.log(sortArray(oddsAndEvens));



// Part II - 1
const fatorial = (number) => number === 0 || number === 1 ? number : number * fatorial(number - 1);

//console.log(fatorial(4));

// Part II - 2
const highestWord = (pharse) => {
  return pharse.match(/\w+/g).sort((a, b) => b.length - a.length)[0];
}

//console.log(highestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


// Part II - 4 - 1
const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
{result}

    #goTrybe
    `

    return result
}

console.log(buildSkillsPhrase("Lucas"))

//console.log(replaceX(`Tryber x aqui!`));
