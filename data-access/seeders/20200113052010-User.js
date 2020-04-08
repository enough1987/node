export default {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        userId: '13a3a7b0-35ad-11ea-a0ab-8df80b3e20c6',
        login: 'test1',
        password: 'test1',
        age: 20,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '23a3a7b0-35ad-11ea-a0ab-8df80b3e20c7',
        login: 'test2',
        password: 'test2',
        age: 30,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: '33a3a7b0-35ad-11ea-a0ab-8df80b3e20c8',
        login: 'test3',
        password: 'test3',
        age: 40,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
