const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/uploads`));
const fileExists = (fileName) => {
  //fs.readdirSync retorna uma lista com nome de todos os arquivos da pasta uploads.
  const files = fs.readdirSync(`${__dirname}/uploads`);
  //Aqui usamos a função some, que retorna `true` se algum dos items do array passar no teste, no nosso caso o `file.includes`.
  return files.some(file => file === fileName);
}

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
      if (fileExists(file.originalname)) {
        //Colocar uma flag de erro na requisição
        req.fileDuplicated = true;
    
        //Rejeitar o arquivo
        return cb(null, false);
      }
      callback(null, true);
    } else {
      callback(null, false);
      return callback('Extension must be `png`');
    }
  }
 });

 const storages = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'src/uploads/')
  },
  filename: function (req, file, callback) {
    callback(null, Date.now()+'-'+file.originalname);
  }
});
 
const uploads = multer({ storage: storages });

app.post('/upload', upload.single('file'), (_req, res) => {
  if (req.fileDuplicated)
    return res.status(409).send({ error: { mesage: "File already exists" } })
  res.status(200).send('Ok');
});

app.post('/multiple', uploads.array("file"), (_req, res) => {
  res.status(200).send('Ok');
});

app.listen(3000);