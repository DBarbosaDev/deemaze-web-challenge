const mongoose = require('mongoose');

const RestaurantMenuModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    specialities: [String],
    day: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { collection: 'restaurants_menus' });

const RestaurantMenuModel = mongoose.model('RestaurantMenuModel', RestaurantMenuModelSchema);

const createRestaurantMenu = (name, specialities, day) => {
    return RestaurantMenuModel.create({ name, day, specialities });
};

module.exports = {
    createRestaurantMenu
};
