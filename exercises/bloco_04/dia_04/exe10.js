

function repeatValue(arr) {
  let sortedArr = arr.slice().sort();
  let result = [];

  for (let index = 0; index < arr.length; index++) {
    
    if (sortedArr[index + 1] === sortedArr[index]) {
      result.push(sortedArr[index]);
    }
    
  }
  return result;
}

console.log(repeatValue([2, 3, 2, 5, 8, 2, 3]));

