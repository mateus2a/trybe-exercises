const { Patients, Plans, Surgeries } = require('../models');
module.exports = {
  async indexPlans(req, res) {
    const patients = await Patients.findAll({
      include: [{ model: Plans, as: 'plans' }],
    });

    return res.status(200).json(patients);
  },
};
