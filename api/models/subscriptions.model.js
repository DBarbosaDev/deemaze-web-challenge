const mongoose = require('mongoose');

const SubscriptionModelSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    subscribedAt: {
        type: Date,
        require: true,
        default: Date.now
    }
}, { collection: 'subscriptions' });

const SubscriptionModel = mongoose.model('SubscriptionModel', SubscriptionModelSchema);

const createSubscription = (email) => SubscriptionModel.create({ email });

const getSubscriptionByEmail = (email) => SubscriptionModel.findOne({ email }).exec();

module.exports = {
    createSubscription,
    getSubscriptionByEmail
};
