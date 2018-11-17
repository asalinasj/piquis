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
    },
    hooks: {
      beforeValidate: (dish, options) => {
        if (dish.RestaurantId === undefined) {
          throw new Error('Bad Data: A dish must be associated with a restaurant.')
        }
      },
    },
  });
  return Dish;
}