const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'src/uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now()+'-'+file.originalname);
  }
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, callback) => {
    if (file.mimetype == "image/png") {
      callback(null, true);
    } else {
      callback(null, false);
      return callback('Extension must be `png`');
    }
  }
 });

app.post('/upload', upload.single('file'), (_req, res) => {
  res.status(200).send('Ok');
});

app.listen(3000);