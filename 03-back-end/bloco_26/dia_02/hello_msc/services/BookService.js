const Book = require('../models/BookModel');

const getAll = async () => Book.getAll();

const findById = async (id) => {
  // Solicitamos que o model realize a busca no banco
  const book = await Book.findById(id);

  // Caso nenhum autor seja encontrado, retornamos um objeto de erro.
  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um livro com o id ${id}`,
      },
    };
  }

  // Caso haja um autor com o ID informado, retornamos esse autor
  return book;
};

const create = async (title, authorId) => {
  // chamamos o model e retornamos o resultado
  return Book.create(title, authorId);
};

module.exports = {
  getAll,
  findById,
  create,
};
