const express = require('express'),
router = express.Router();

const dishRoutes = require('./dish');
const restaurantRoutes = require('./restaurant');

router.use('/dish', dishRoutes);
router.use('/restaurant', restaurantRoutes);

module.exports = router;