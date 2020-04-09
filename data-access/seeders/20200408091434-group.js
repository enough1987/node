module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [
      {
        id: 5,
        groupId: '13a3a7b0-35ad-11ea-a0ab-8df80b3e20у5',
        name: 'TEST5',
        permition: 'WRITE'
      }
    ], {});
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
