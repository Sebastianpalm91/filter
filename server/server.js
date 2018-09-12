require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI,  { useNewUrlParser: true },  (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('connected to mongoDB');
})

const app = express();

app.use(cors());
app.use('*', cors());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


const port = process.env.PORT;

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
