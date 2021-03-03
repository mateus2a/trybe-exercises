/**
 * Fiquei com um pouco de dificuldade nessa questão, então resolvi usar como 
 * base o código do Evan Kennedy: https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
 */
function isPrime(num) {
  if (num < 2) return false;
  for (let index = 2; index < num; index++) {
    if (num % index === 0) return false;
  }
  return true;
}

for (let index = 0; index < 100; index++) {
  if (isPrime(index)) console.log(index);
}