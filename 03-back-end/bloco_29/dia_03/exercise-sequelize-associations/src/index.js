const bodyParser = require('body-parser');

const express = require('express');

const PatientController = require('./database/controllers/PatientController');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/patients/plans', PatientController.indexPlans);
app.get('/patients/surgeries', PatientController.indexSurgeries);

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
