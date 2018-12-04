'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn("Dish", "AverageRating", {
      type: Sequelize.DOUBLE(1,2),
      allowNull: true,
    }).then(() => {
      return queryInterface.renameColumn("Dish", "name", "Name");
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
    */
  }
};
