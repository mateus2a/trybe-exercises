const express = require('express');
const app = express();

const Author = require('./src/models/Author');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
});

app.listen(3000);
