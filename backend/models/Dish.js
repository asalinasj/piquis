module.exports = (sequelize,DataTypes) => {
  const Dish = sequelize.define('Dish', {
    Name: DataTypes.STRING,
    AverageRating: DataTypes.DOUBLE(1,2),
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