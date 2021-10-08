const { Patients, Plans } = require('../models');
module.exports = {
  async index(req, res) {
    const patients = await Patients.findAll({
      include: [{ model: Plans, as: 'plans' }],
    });

    return res.status(200).json(patients);
  },
};
