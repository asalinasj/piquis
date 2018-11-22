'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.renameColumn("Restaurant", "name", "Name")
      .then(() => {
        return queryInterface.renameColumn("Restaurant", "location", "Location")
          .then(() => {
            return queryInterface.renameColumn("Restaurant", "rating", "Rating")
          })
      })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
    */
  }
};
