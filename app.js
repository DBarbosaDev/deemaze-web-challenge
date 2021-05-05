const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');

const configs = require('./configs');
const routes = require('./api/routes');

mongoose.connect(
    configs.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err) => {
        if (err) {
            console.log(err);
            process.exit();
        }

        console.log('Database connection stablished');
    }
);

const app = express();

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(configs.RUNNING_MODE));
app.use(mongoSanitize());

app.use('/api', routes);

app.use((req, res) => {
    res.status(404).send('Not Found');
});

module.exports = app;