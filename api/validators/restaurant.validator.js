const { body, validationResult } = require('express-validator');

const { expressResponsesKit, VALIDATORS_CONSTANTS, ERROR_CODES_CONSTANTS } = require('../framework');

const RESTAURANT_VALIDATIONS = VALIDATORS_CONSTANTS.RESTAURANT_VALIDATIONS;

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

const validateDailyMenuParams = () => {
    const validationsSeries = [
        body('name')
            .notEmpty()
            .withMessage(ERROR_CODES_CONSTANTS.NAME_REQUIRED)
            .isLength({ max: RESTAURANT_VALIDATIONS.NAME.MAX_SIZE.VALUE })
            .withMessage(RESTAURANT_VALIDATIONS.NAME.MAX_SIZE.ERROR_CODE),

        body('specialities')
            .exists()
            .withMessage(ERROR_CODES_CONSTANTS.SPECIALITIES_REQUIRED),

        body('day')
            .isDate()
            .withMessage(ERROR_CODES_CONSTANTS.INVALID_DATE_FORMAT)
    ];

    return [...validationsSeries, validatorCallback];
};

const validateDailyMenuSpecialities = (req, res, next) => {
    const { specialities } = req.body;

    let specialitiesArray;

    try {
        specialitiesArray = Array.isArray(specialitiesArray) ? specialities : JSON.parse(specialities);

        if (!Array.isArray(specialitiesArray)) {
            throw new Error();
        }
    }
    catch {
        return expressResponsesKit.sendErrorResponse(res, 400, { code: ERROR_CODES_CONSTANTS.INVALID_SPECIALITIES_ARRAY_TYPE });
    }

    if (specialitiesArray.some((el) => typeof el !== 'string')) {
        return expressResponsesKit.sendErrorResponse(res, 400, { code: ERROR_CODES_CONSTANTS.INVALID_SPECIALITIES_ELEMENT_TYPES });
    }

    if (specialitiesArray.length === 0) {
        return expressResponsesKit.sendErrorResponse(res, 400, { code: ERROR_CODES_CONSTANTS.SPECIALITIES_REQUIRED });
    }

    return next();
};

module.exports = {
    validateDailyMenuParams,
    validateDailyMenuSpecialities
};
