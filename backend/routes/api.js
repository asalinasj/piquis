const express = require('express'),
router = express.Router();

const dishRoutes = require('./dish');

router.use('/dish', dishRoutes)

module.exports = router;