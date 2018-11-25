module.exports = (sequelize,DataTypes) => {
  const Rating = sequelize.define('Rating', {
    Stars: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 5
      }
    }
  },
  {
    tableName: 'Rating',
    classMethods: {
      associate : function(models) {
        Rating.belongsTo(models.Dish);
      },
    }
  })
  return Rating;
};