const express = require('express');

const { newsletterCtrl } = require('../controllers');
const { newsletterValidator } = require('../validators');
const { newsletterMiddleware } = require('../middlewares');

const router = express.Router();

router.post(
    '/subscribe',
    newsletterValidator.validateSubscriptionParams(),
    newsletterMiddleware.checkSubscriptionExistance,
    newsletterCtrl.subscribe
);

module.exports = router;
