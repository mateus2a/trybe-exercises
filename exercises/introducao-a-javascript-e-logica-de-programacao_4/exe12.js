/**
 * Para desenvolver esta função me baseei um pouco no código da Sonya Moisset,
 * link do repositório: https://www.freecodecamp.org/news/two-ways-to-confirm-the-ending-of-a-string-in-javascript-62b4677034ac/
 */
function verificaFimPalavra(string, ending) {
  return string.substr(-ending.length) === ending;
}


console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));