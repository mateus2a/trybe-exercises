const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (words) => {
  let wordsCount = words.map(index => {
    return index.length;
  });

  return wordsCount;
}


const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);