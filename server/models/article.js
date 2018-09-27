const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    article: {
        type: String,
        trim: true,
        required: true,
    },
    author: {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        img: {
            type: String,
            required: true,
            trim: true,
        }
    },
    published_at: {
        required: true,
        type: String,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Article', articleSchema);
