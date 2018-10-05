module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: {
      type: DataTypes.STRING,
      validate: {
        isNull: false,
        notEmpty: true,
      },
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: false,
        isAlphanumeric: true,
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: false,
        min: 1,
        max: 5,
      },
    },
  },
  {
    tableName: 'Restaurant',
    classMethods: {
      associate : function(models) {
        Restaurant.hasMany(models.Dish, {as: 'dishes'});
      }
    },
  });
  return Restaurant;
}
