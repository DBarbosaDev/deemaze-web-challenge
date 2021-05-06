const sendResponse = (expressResponse, statusCode, details = {}) => {
    const { data, error } = details;
    const { code, codes, message } = error || {};

    const responseObject = {
        success: !error,
        status: statusCode,
        error: error ? { code, codes, message } : undefined,
        data
    };

    expressResponse.status(responseObject.status).json(responseObject);
};

/**
 * Submit an express response of success type
 * @param {Object} expressResponse Express Response dependency
 * @param {Number} statusCode Response status code
 * @param {Object} data Object with data
 */
const sendSuccessResponse = (expressResponse, statusCode, data) => {
    sendResponse(expressResponse, statusCode, { data });
};

/**
 * Submit an express response of error type
 * @param {Object} expressResponse Express Response dependency
 * @param {Number} statusCode Response status code
 * @param {Object} errorDetails Object with the error details
 * @param {String} errorDetails.code Error code
 * @param {String | Object} errorDetails.message Error message
 */
const sendErrorResponse = (expressResponse, statusCode, errorDetails) => {
    sendResponse(expressResponse, statusCode, { error: errorDetails });
};

module.exports = {
    sendSuccessResponse,
    sendErrorResponse
};