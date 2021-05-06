const ERROR_CODES_CONSTANTS = require('./errorCodes.constants');

module.exports = {
    NEWSLETTER_VALIDATIONS: {
        EMAIL: {
            MAX_SIZE: {
                VALUE: 100,
                ERROR_CODE: ERROR_CODES_CONSTANTS.EMAIL_MAX_SIZE_EXCEEDED
            }
        }
    },
    RESTAURANT_VALIDATIONS: {
        NAME: {
            MAX_SIZE: {
                VALUE: 100,
                ERROR_CODE: ERROR_CODES_CONSTANTS.NAME_MAX_SIZE_EXCEEDED
            },
            REQUIRED_ERROR: ERROR_CODES_CONSTANTS.NAME_REQUIRED
        }
    }
};
