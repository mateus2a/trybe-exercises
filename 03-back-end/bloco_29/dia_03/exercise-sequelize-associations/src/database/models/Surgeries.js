module.exports = (sequelize, DataTypes) => {
  const Surgeries = sequelize.define(
    'Surgeries',
    {
      surgery_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Surgeries;
};
