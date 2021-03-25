const assert = require('assert');

const division = (x, y) => {
  return x / y;
}

const expected = division(9, 3);

assert.strictEqual(expected, 3, 'Nove dividido por três é três.');

