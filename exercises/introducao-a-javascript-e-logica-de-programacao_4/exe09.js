
function maxCaracteres(arr) {
  let max = 0;
  let maxString = '';
  for (let index = 0; index < arr.length; index++) {
    let current = arr[index].length;

    if (max < current) {
      max = current;
      maxString = arr[index];
    }

  }
  console.log(maxString);
}
maxCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);