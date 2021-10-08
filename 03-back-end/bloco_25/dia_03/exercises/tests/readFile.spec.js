const fs = require('fs');
const { expect } = require('chai');

const readFile = require('../src/readFile');

describe('Testing readFile.js', () => {
  describe('File finded', () => {
    it('File has been found', () => {
      const fileNotFound = readFile('arquivo.txt', 'Ola');
      expect(fileNotFound).to.be.equals('ok');
    });
    it('é uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });
  });
});