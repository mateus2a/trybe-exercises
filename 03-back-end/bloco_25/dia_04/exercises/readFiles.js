const fs = require('fs/promises');

const readFile = () => {
  return fs.readFile('./simpsons.json', 'utf8')
    .then((content) => JSON.parse(content));
}

module.exports = readFile;