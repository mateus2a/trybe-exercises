const { Patients, Plans, Surgeries } = require('../models');
module.exports = {
  async indexPlans(req, res) {
    const patients = await Patients.findAll({
      include: [{ model: Plans, as: 'plans' }],
    });

    return res.status(200).json(patients);
  },
  async store(req, res) {
    const { plan_id, fullname } = req.body;

    const patients = await Patients.create({ plan_id, fullname });

    res.status(201).json(patients);
  },
};
