module.exports = (sequelize,DataTypes) => {
  const Dish = sequelize.define('Dish', {
    name: DataTypes.STRING,
  },
  {
    tableName: 'Dish',
    classMethods: {
      associate : function(models) {
        Dish.belongsTo(models.Restaurant);
      },
    }
  });
  return Dish;
}