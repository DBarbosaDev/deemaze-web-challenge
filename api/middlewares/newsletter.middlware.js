const { expressResponsesKit, ERROR_CODES_CONSTANTS } = require('../framework');
const { SubscriptionsModel } = require('../models');

const checkSubscriptionExistance = async (req, res, next) => {
    const { email } = req.body;

    if (await SubscriptionsModel.getSubscriptionByEmail(email)) {
        return expressResponsesKit.sendErrorResponse(res, 406, { code: ERROR_CODES_CONSTANTS.EMAIL_ALREADY_SUBSCRIVED });
    }

    return next();
};

module.exports = {
    checkSubscriptionExistance
};
