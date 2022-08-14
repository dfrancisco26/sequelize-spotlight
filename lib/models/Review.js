const pool = require('../utils/pool');

class Review {
  constructor({ stars, detail, restaurant_id, user_id }) {
    this.stars = stars;
    this.detail = detail;
    this.restaurant_id = restaurant_id;
    this.user_id = user_id;
  }

  static async create({ stars, detail, restaurant_id, user_id }) {
    const { rows } = await pool.query(
      'INSERT INTO reviews (stars, detail, restaurant_id, user_id) VALUES($1, $2, $3, $4) RETURNING *',
      [stars, detail, restaurant_id, user_id]
    );
    return new Review(rows[0]);
  }
}

module.exports = Review;
