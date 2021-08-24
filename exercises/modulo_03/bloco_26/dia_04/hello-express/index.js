const express = require('express');
const app = express();
const authRouter = require('./authRouter');

app.use('/secure', authRouter);

/* GET /hello */
app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello world, with no auth!' });
});