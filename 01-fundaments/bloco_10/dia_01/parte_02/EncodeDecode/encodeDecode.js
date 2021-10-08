function encode(string) {
    /**
     * Usei como base o código do Voicu, segue abaixo o link do StackOveFlow:
     * https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
     */
    let encodeString = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
  
    string = string.replace(/[aeiou]/g, ((m) => encodeString[m]));
    return string;
  }
  
  function decode(string) {
    let decodeString = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
  
    string = string.replace(/[12345]/g, ((m) => decodeString[m]));
    return string;
  }

const encodeDecode = { encode, decode };

module.exports = encodeDecode;