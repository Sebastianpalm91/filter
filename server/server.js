require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const busboy = require('connect-busboy');


mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI,  { useNewUrlParser: true },  (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connected to mongoDB');
})

const app = express();

app.use('/public', express.static(path.join('', 'public')));

require(path.join(__dirname + '/models/article'));
require(path.join(__dirname + '/models/articlesubjects'));
require(path.join(__dirname + '/models/articletypes'));

app.use(cors());
app.options('*', cors());
app.use(busboy());


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


const router = require('./routes');
app.use('/', router);


const port = process.env.PORT;

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
