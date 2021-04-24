const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'must be divided for three and five');

assert.strictEqual(myFizzBuzz(3), 'fizz', 'it must be divided for three');

assert.strictEqual(myFizzBuzz(5), 'buzz', 'it must be divided for five');

assert.strictEqual(myFizzBuzz(17), 17);

assert.strictEqual(myFizzBuzz('ola'), false);
