const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();

    if (!books) return res.status(404).json({ message: 'Books not found' });

    return res.status(200).json(books);
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  const { title, author } = req.body;
  try {
    const book = await Book.create({ title, author });

    return res.status(200).json(book);
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author } = req.body;
    const [updateBook] = await Book.update(
      { title, author },
      { where: { id } }
    );

    if (!updateBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(updateBook);
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy({ where: { id } });

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
