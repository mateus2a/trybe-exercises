const connection = require('./connection');

const isValid = async (firstName, lastName, email, password) => {
  if (!firstName || !lastName || !email || !password) return false;
  if (password.length < 6) return false;
};

const create = async (firstName, lastName, email, password) =>
  connection().then((db) =>
    db.collection('users').insertOne({ firstName, lastName, email, password })
  );

module.exports = {
  isValid,
  create,
};
