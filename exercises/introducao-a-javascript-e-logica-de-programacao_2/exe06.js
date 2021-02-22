let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let aux = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) {
    aux++;
  } 
} 
if (aux > 0) {
  console.log(aux);
} else {
  console.log('nenhum valor ímpar encontrado');
}
