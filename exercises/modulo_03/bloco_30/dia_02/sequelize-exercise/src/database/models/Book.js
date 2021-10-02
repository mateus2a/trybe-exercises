const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    phone_num: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  });

  return User;
};

module.exports = User;
