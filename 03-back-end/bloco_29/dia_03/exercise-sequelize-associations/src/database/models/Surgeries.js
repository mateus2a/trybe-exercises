module.exports = (sequelize, DataTypes) => {
  const Surferies = sequelize.define(
    'Surferies',
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

  return Surferies;
};
