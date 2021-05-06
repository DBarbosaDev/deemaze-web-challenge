const { expressResponsesKit } = require('../framework');
const { RestaurantsMenusModel } = require('../models');

const createDailyMenu = async (req, res) => {
    const { name, specialities, day } = req.body;

    try {
        await RestaurantsMenusModel.createRestaurantMenu(name, JSON.parse(specialities), day);

        return expressResponsesKit.sendSuccessResponse(res, 201);
    }
    catch (error) {
        return expressResponsesKit.sendErrorResponse(
            res, 500, { stack: error, message: error.message }
        );
    }
};

module.exports = {
    createDailyMenu
};
