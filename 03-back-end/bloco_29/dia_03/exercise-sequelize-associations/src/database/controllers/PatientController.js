const { Patients } = require('../models');
module.exports = {
  async index(req, res) {
    const patients = await Patients.findAll();

    res.send(patients);
  },
};
