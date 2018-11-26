'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.changeColumn("Dish", "AverageRating", {
      type: Sequelize.DECIMAL(3,2),
    }).then(() => {
      return queryInterface.changeColumn("Rating", "Stars", {
        type: Sequelize.DECIMAL(3,2),
      })
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
    */
  }
};
