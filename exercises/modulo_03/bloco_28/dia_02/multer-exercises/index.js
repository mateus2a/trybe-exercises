const express = require('express');
const multer = require('multer');

const app = express();
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now()+'-'+file.originalname);
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (_req, res) => {
  res.status(200).send('Ok');
});

app.listen(3000);