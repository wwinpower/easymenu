require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {connect} = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(morgan('dev'));

require('./app/routes/product.route.js')(app);


const PORT = process.env.PORT || 8080;

async function start() {
    await connect(`${process.env.MONGO_URL}`).then(() => {
        console.log("Успешно подключился к базе данных");

        app.listen(PORT, () => {
            console.log("Сервер прослушивает порт 3000");
        });

    }).catch(err => {
        console.log('Не удалось подключиться к базе данных.', err);
        process.exit();
    });
}

start();
