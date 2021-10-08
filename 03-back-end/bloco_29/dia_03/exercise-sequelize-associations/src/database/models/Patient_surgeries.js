module.exports = (sequelize, _DataTypes) => {
  const PatientSurgeries = sequelize.define(
    'PatientSurgeries',
    {},
    { timestamps: false }
  );

  PatientSurgeries.associate = (models) => {
    models.Patients.belongsToMany(models.Surgeries, {
      as: 'patients',
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'surgeries',
      through: PatientSurgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };

  return PatientSurgeries;
};
