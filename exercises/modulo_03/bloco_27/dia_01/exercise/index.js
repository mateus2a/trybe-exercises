const express = require('express');
const bodyParser = require('body-parser');

const User = require('./models/User');

const app = express();
app.use(bodyParser.json());

app.post('/users', async (req, res) => {
  const { _id, firstName, lastName, email, password } = req.body;
  if (!User.isValid)
    res.status(404).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    });
  await User.create({ firstName, lastName, email, password });
  res.status(201).json({ id: _id, firstName, lastName, email });
});

app.listen(3000);
