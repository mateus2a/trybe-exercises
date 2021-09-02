const connection = require('./connection');

const getNewBook = (bookData) => {
  const { id, title, authorId } = bookData;

  const fullName = [title, authorId].filter((name) => name).join(' ');

  return {
    id,
    title,
    authorId,
    name: fullName,
  };
};

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books');
  return books;
};

const getByAuthorId = async () => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const findById = async (id) => {
  const query = 'SELECT * FROM books WHERE id=?';
  const [bookData] = await connection.execute(query, [id]);
  if (bookData.length === 0) return null;
  const { title, authorId } = serialize(bookData[0]);
  return getNewBook({
    id,
    title,
    authorId,
  });
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
};
