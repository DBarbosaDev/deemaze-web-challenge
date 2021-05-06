const ERROR_CODES_CONSTANTS = require('./errorCodes.constants');

module.exports = {
    NEWSLETTER_VALIDATIONS: {
        EMAIL: {
            MAX_SIZE: {
                VALUE: 100,
                ERROR_CODE: ERROR_CODES_CONSTANTS.EMAIL_MAX_SIZE_EXCEEDED
            },
            INVALID: {
                ERROR_CODE: ERROR_CODES_CONSTANTS.INVALID_EMAIL
            }
        }
    }
};
