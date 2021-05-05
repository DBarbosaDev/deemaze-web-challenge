const { body, param, validationResult } = require('express-validator');

const { expressResponsesKit } = require('../../framework');

const validatorCallback = (req, res, next) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
        return next();
    }

    const normalizedErrorObjects = result.errors.map((el) => {
        return { code: el.msg, param: el.param };
    });

    expressResponsesKit.sendError(res, { codes: normalizedErrorObjects });
};

const validateParams = () => {
    const validationsSeries = [
    ];

    return [...validationsSeries, validatorCallback];
};

module.exports = {
    validateParams
};
