const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

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

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  if (!Book.isValid({ title, author_id }))
    return res.status(400).json({ message: 'Dados inválidos' });
  await Book.createBook(title, author_id);
  res.status(201).json({ message: 'Autor criado com sucesso! ' });
});

app.listen(3000);
