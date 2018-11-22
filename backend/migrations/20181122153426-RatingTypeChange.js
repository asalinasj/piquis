'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.changeColumn("Rating", "Stars", {
      type: Sequelize.DOUBLE(1,2)
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
    */
  }
};
