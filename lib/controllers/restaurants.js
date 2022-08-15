const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await db.Restaurant.findAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const restaurant = await db.Restaurant.findByPk(req.params.id);
      if (!restaurant) next();
      // await restaurant.addReviews();
      res.json(restaurant);
    } catch (e) {
      next(e);
    }
  })
  .post('/:id/reviews', authenticate, async (req, res, next) => {
    try {
      const data = await db.Review.create({
        ...req.body,
        user_id: req.user.id,
        restaurant_id: req.params.id,
      });
      console.log(data);
      res.json(data);
    } catch (e) {
      next(e);
    }
  });
