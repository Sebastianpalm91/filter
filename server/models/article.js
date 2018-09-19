const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    Title: {
        type: String,
        trim: true,
        required: true,
    },
    Article: {
        type: String,
        trim: true,
        required: true,
    },
    Author: {
        type: String,
        trim: true,
        required: true,
    },
    Author_img: {
        type: String,
    }
});

module.exports = mongoose.model('Article', articleSchema);
