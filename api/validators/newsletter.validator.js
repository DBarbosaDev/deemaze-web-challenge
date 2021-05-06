const { body, validationResult } = require('express-validator');

const { expressResponsesKit, VALIDATORS_CONSTANTS } = require('../framework');

const NEWSLETTER_VALIDATIONS = VALIDATORS_CONSTANTS.NEWSLETTER_VALIDATIONS;

const validatorCallback = (req, res, next) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
        return next();
    }

    const normalizedErrorObjects = result.errors.map((el) => {
        return { code: el.msg, param: el.param };
    });

    return expressResponsesKit.sendErrorResponse(res, 400, { codes: normalizedErrorObjects });
};

const validateSubscriptionParams = () => {
    const validationsSeries = [
        body('email')
            .isEmail()
            .withMessage(NEWSLETTER_VALIDATIONS.EMAIL.INVALID.ERROR_CODE)
            .isLength({ max: NEWSLETTER_VALIDATIONS.EMAIL.MAX_SIZE.VALUE })
            .withMessage(NEWSLETTER_VALIDATIONS.EMAIL.MAX_SIZE.ERROR_CODE)
    ];

    return [...validationsSeries, validatorCallback];
};

module.exports = {
    validateSubscriptionParams
};
