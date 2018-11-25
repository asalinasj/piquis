const express = require('express'),
router = express.Router();
const models = require('../models');
const Op = require('sequelize').Op;

router.get('/', (req,res) => {
  console.log("Serving request: " + req.baseUrl);
  models.Dish.findAll().then(dishes => {
    res.json(dishes);
  })
});

router.get('/:dishName', (req,res) => {
  console.log(`Get with param: ${req.params.dishName}`);
  models.Dish.findAll({
    where: {
      name: {
        $iLike: `%${req.params.dishName}%`,
      },
    },
  })
    .then(dishes => {
      res.json(dishes);
    });
});

router.get('/:id', (req,res) => {
  console.log("Getting Dish with id: " + req.param.id);
  models.Dish.findById(req.params.id).then(dish => {
    res.json(dish);
  })
});

router.post('/', (req,res) => {
  console.log("request body: " + req.body.id);
  models.Dish.create({name: req.body.name, RestaurantId: req.body.restaurantId}).then(dish => {
    res.json(dish);
  });
});

module.exports = router;