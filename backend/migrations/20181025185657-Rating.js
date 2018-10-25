'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /* Add altering commands here. */
    return queryInterface.createTable('Rating', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Stars: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      DishId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dish',
          key: 'id',
        },
        allowNull: false,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    /* Add reverting commands here. */
  }
};