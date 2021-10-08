module.exports = (sequelize, DataTypes) => {
  const Plans = sequelize.define(
    'Plans',
    {
      plan_id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      coverage: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      timestamps: false,
    }
  );

  return Plans;
};
