'use strict';

const db = require('../models');
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await db.User.bulkCreate([
      {
        first_name: 'Alvin',
        last_name: 'A',
        password: '123456',
        email: 'alvin@example.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Bob',
        last_name: 'B',
        password: '123456',
        email: 'bob@example.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: 'Carole',
        last_name: 'C',
        password: '123456',
        email: 'carole@example.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert('reviews', [
      {
        user_id: 1,
        restaurant_id: 1,
        stars: 5,
        detail: 'Best restaurant ever!',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        restaurant_id: 1,
        stars: 1,
        detail: 'Terrible service :(',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        restaurant_id: 1,
        stars: 4,
        detail: 'It was fine.',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
