const express = require('express');

const newsletterRoutes = require('./newsletter.routes');
const restaurantRoutes = require('./restaurant.routes');

const router = express.Router();

router.use('/newsletter', newsletterRoutes);
router.use('/restaurant', restaurantRoutes);

module.exports = router;
