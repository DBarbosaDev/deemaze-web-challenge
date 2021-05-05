require('dotenv').config();

const bcrypt = require('bcrypt');

module.exports = {
    PORT: process.env.PORT || 8080,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/myApiDB',
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY || bcrypt.genSaltSync(20),
    RUNNING_MODE: process.env.RUNNING_MODE || 'production'
};
