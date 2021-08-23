const { expect } = require('chai');
const getNumber = require('../src/getNumber');

describe('Testing number.js', () => {
  describe('Verify if is a number', () => {
    it('if is a number', () => {
      const resposta = numNaturalFn('AAAA');

      expect(resposta).to.be.a('string');
    });
  });
  describe('Verify if is positive', () => {
    const number = getNumber(1);
    it('if is positive', () => {
      expect(number).to.be.equals('positivo');
    });
  });
  describe('Verify if is negative', () => {
    const number = getNumber(-1);
    it('if is negative', () => {
      expect(number).to.be.equals('negativo');
    });
  });
  describe('Verify if is neutro', () => {
    const number = getNumber(0);
    it('if is neutro', () => {
      expect(number).to.be.equals('neutro');
    });
  });
});