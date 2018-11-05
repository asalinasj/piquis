const express = require('express'),
router = express.Router();
const model = require('../models');

router.get('/', (req,res) => {
  console.log(req.baseUrl);
  model.Restaurant.findAll().then(restaurants => {
    res.json(restaurants);
  });
});

router.post('/', (req,res) => {
  console.log(req.body.id);
  model.Restaurant.create({name: req.body.name, location: req.body.location, rating: req.body.rating})
    .then(restaurant => {
      res.json(restaurant);
    });
});

module.exports = router;