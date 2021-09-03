const rescue = require('express-rescue');
const Joi = require('joi');
const service = require('../services/BookService');

const getAll = rescue(async (req, res) => {
  const books = await service.getAll();

  res.status(200).json(books);
});

const findById = rescue(async (req, res, next) => {
  // Extraímos o id da request
  const { id } = req.params;

  // Pedimos para o service buscar o autor
  const book = await service.findById(id);

  // Caso o service retorne um erro, interrompemos o processamento
  // e inicializamos o fluxo de erro
  if (book.error) return next(book.error);

  // Caso não haja nenhum erro, retornamos o author encontrado
  res.status(200).json(book);
});

const create = rescue(async (req, res, next) => {
  // Utilizamos o Joi para descrever o objeto que esperamos
  // receber na requisição. Para isso, chamamos Joi.object()
  // passando um objeto com os campos da requisição e suas descrições
  const { error } = Joi.object({
    // Deve ser uma string (.string()) não vazia (.not().empty()) e é obrigatório (.required())
    title: Joi.string().not().empty().required(),
    // Deve ser uma string não vazia e é obrigatório
    authorId: Joi.string().not().empty().required(),
  })
    // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras
    .validate(req.body);

  // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
  if (error) {
    return next(error);
  }

  // Caso não haja erro de validação, prosseguimos com a criação do usuário
  const { title, authorId } = req.body;

  const newBook = await service.create(title, authorId);

  // Caso haja erro na criação do autor, iniciamos o fluxo de erro
  if (newBook.error) return next(newBook.error);

  // Caso esteja tudo certo, retornamos o status 201 Created, junto com as informações
  // do novo autor
  return res.status(201).json(newBook);
});

module.exports = {
  getAll,
  findById,
  create,
};
