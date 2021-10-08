const express = require('express');
const bodyParser = require('body-parser');

const Book = require('./src/models/Book');

const app = express();
app.use(bodyParser.json());

app.get('/books', async (req, res) => {
  const books = await Book.getAll();
  return res.json(books);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = author_id
    ? await Book.getByAuthorId(author_id)
    : await Book.getAll();

  res.status(200).json(books);
});

app.listen(3000);
