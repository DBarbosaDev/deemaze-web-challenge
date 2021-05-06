const express = require('express');

const { restaurantCtrl } = require('../controllers');
const { restaurantValidator } = require('../validators');

const router = express.Router();

router.post(
    '/daily_menu',
    restaurantValidator.validateDailyMenuParams(),
    restaurantValidator.validateDailyMenuSpecialities,
    restaurantCtrl.createDailyMenu
);

module.exports = router;
