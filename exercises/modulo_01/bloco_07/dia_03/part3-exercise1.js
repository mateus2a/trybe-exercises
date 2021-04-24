const assert = require('assert');

const greetPeople = (people) => {
  let greeting = '';
  let greatingArray = [];

  for (const person in people) {
    greatingArray.push(greeting = 'Hello ' + people[person]);
  }

  return greatingArray;
  
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];


assert.strictEqual(typeof (greetPeople), 'function', 'Deve existir uma função chamada greetPeople');

assert.deepStrictEqual(greetPeople(parameter), result);
