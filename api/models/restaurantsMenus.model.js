const mongoose = require('mongoose');

const RestaurantMenuModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    specialities: {
        type: Array,
        required: true
    },
    menuDay: {
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

const createRestaurantMenu = (name, specialities, menuDay) => RestaurantMenuModel.create({ name, specialities, menuDay });

module.exports = {
    createRestaurantMenu
};
