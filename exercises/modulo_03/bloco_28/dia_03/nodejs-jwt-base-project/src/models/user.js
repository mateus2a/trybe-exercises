const connect = require('./connection');
const ObjectId = require('mongodb').ObjectId;

const registerUser = async (username, password, name, birthdate, biography) =>
  connect()
    .then((db) =>
      db
        .collection('users')
        .insertOne({ username, password, name, birthdate, biography })
    )
    .then((result) => result.ops[0].username);

const findUser = async (username) =>
  connect().then((db) => db.collection('users').findOne({ username }));

const findUserById = async (userId) =>
  connect().then((db) =>
    db.collection('users').find({ _id: ObjectId(userId) })
  );

module.exports = { registerUser, findUser, findUserById };
