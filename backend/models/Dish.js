module.exports = (sequelize,DataTypes) => {
  const Dish = sequelize.define('Dish', {
    name: DataTypes.STRING,
  },
  {
    tableName: 'Dish',
  });
  return Dish;
}