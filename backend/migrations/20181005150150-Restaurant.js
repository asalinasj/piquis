'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
    */
    queryInterface.createTable('Restaurant', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      rating: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      }
    }).then(() => {  
      queryInterface.addColumn('Dish', 'RestaurantId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'Restaurant',
          key: 'id',
        },
        allowNull: true,
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
    */
  }
};
