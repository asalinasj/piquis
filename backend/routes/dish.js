const express = require('express'),
router = express.Router();
const models = require('../models');

router.get('/', (req,res) => {
  console.log("Serving request: " + req.baseUrl);
  models.Dish.findAll().then(dishes => {
    res.json(dishes);
  })
});

router.get('/:id', (req,res) => {
  console.log("Getting Dish with id: " + req.param.id);
  models.Dish.findById(req.params.id).then(dish => {
    res.json(dish);
  })
});

router.post('/', (req,res) => {
  console.log("request body: " + req.body.id);
  models.Dish.create({name: req.body.name}).then(dish => {
    res.json(dish);
  });
});

module.exports = router;