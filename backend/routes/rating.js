const express = require('express'),
router = express.Router();
const models = require('../models');

router.get('/:dishId', (req,res) => {
  models.Rating.findAll({
    where: {
      DishId: req.params.dishId
    }
  }).then(ratings => res.json(ratings));
});

router.post('/:dishId', (req,res) => {
  models.Rating.create({Stars: req.body.stars, DishId: req.params.dishId})
    .then(rating => res.json(rating));
});

module.exports = router;