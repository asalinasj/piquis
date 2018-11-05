const express = require('express'),
router = express.Router();

const ratingRoutes = require('./rating');
const dishRoutes = require('./dish');
const restaurantRoutes = require('./restaurant');

router.use('/rating', ratingRoutes);
router.use('/dish', dishRoutes);
router.use('/restaurant', restaurantRoutes);

module.exports = router;