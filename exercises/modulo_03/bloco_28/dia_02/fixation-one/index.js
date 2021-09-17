const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
app.use(bodyParser.json())

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'envios/')
  },
  filename: (req, file, callback) => {
    callback(null, Date.now()+'-'+file.originalname)
  }
})

const upload = multer({ storage })

app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/ping', (req, res) => {
  res.send('Pong')
});

app.get('/envios', upload.single('file'), (req, res) => {
  res.send('Ok');
});

app.get('/files/upload', upload.single('file'), (req, res) => {
  res.send('Ok');
});

app.listen(3000);