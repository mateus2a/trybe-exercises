const myFizzBuzz = require('./myFizzBuzz');

describe('Verify myFizzBuzz function', () => {
    it('If returns fizzbuzz', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    });
    it('If returns fizz', () => {
        expect(myFizzBuzz(9)).toEqual('fizz');
    });
    it('If returns buzz', () => {
        expect(myFizzBuzz(5)).toEqual('buzz');
    });
    it('If returns buzz', () => {
        expect(myFizzBuzz('17')).toEqual(false);
    });
});