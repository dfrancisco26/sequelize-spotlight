'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'Mission Impossible',
        description: 'Agent someone takes on an impossible mission.',
        image: 'https://www.shutterstock.com/image-vector/mission-impossible-red-rubber-stamp-1857277021',
        releaseYear: 1996,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Waterboy',
        description: 'Small town mamas boy becomes football hero.',
        image: 'https://m.media-amazon.com/images/I/81BeAomXzOL._SL1500_.jpg',
        releaseYear: 1998,
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
