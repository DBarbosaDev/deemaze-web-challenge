const app = require('./app');

app.listen(configs.SERVER_PORT, 'localhost', () => {
    console.log(`Server started at port ${configs.SERVER_PORT}`);
});
