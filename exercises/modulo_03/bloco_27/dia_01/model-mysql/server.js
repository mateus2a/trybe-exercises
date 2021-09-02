const express = require('express');
const app = express();

const Author = require('./src/models/Author');
const Book = require('./src/models/Book');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = author_id
    ? await Book.getByAuthorId(author_id)
    : await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book);
});

app.listen(3000);
