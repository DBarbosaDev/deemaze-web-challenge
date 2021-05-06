const express = require('express');

const { restaurantCtrl } = require('../controllers');

const router = express.Router();

router.post('/daily_menu', restaurantCtrl.createDailyMenu);

module.exports = router;
