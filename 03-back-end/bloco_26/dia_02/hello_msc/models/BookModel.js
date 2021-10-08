const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getNewBook = (bookData) => {
  const { id, title, authorId } = bookData;

  return {
    id,
    title,
    authorId,
  };
};

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray())
    .then((books) =>
      books.map(({ _id, title, authorId }) =>
        getNewBook({
          id: _id,
          title,
          authorId,
        })
      )
    );
};

const isNonEmptyString = (value) => {
  if (!value) return false;

  return typeof value === 'string';
};

const isValid = (title, authorId) => {
  return isNonEmptyString(title) && isNonEmptyString(authorId);
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const bookData = await connection().then((db) =>
    db.collection('books').findOne(new ObjectId(id))
  );

  if (!bookData) return null;

  const { title, authorId } = bookData;

  return getNewBook({ id, title, authorId });
};

const create = async (title, authorId) =>
  connection()
    .then((db) => db.collection('books').insertOne({ title, authorId }))
    .then((result) => getNewBook({ id: result.insertedId, title, authorId }));

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
