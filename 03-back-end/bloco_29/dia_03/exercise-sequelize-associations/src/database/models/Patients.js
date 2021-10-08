module.exports = (sequelize, DataTypes) => {
  const Patients = sequelize.define(
    'Patients',
    {
      patient_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: DataTypes.STRING,
      plan_id: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
    }
  );

  Patients.associate = (models) => {
    Patients.belongsTo(models.Plans, { foreignKey: 'plan_id', as: 'plans' });
  };

  return Patients;
};
