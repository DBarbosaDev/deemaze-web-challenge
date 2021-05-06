const { expressResponsesKit } = require('../framework');

const { SubscriptionsModel } = require('../models');

const subscribe = async (req, res) => {
    const { email } = req.body;

    try {
        await SubscriptionsModel.createSubscription(email);

        return expressResponsesKit.sendSuccessResponse(res, 201);
    }
    catch (error) {
        return expressResponsesKit.sendInternalServerError(
            res, { stack: error, message: error.message }
        );
    }
};
module.exports = {
    subscribe
};
