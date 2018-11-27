module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    Name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    Location: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: false,
        /* todo: add address validation
        isAddress: (value) => {

        }*/
      },
    },
    Rating: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: false,
        min: 0,
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
