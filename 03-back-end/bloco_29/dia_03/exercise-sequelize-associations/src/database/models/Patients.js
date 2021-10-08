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

  return Patients;
};
