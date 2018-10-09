const mongoose = require('mongoose');

const ArticleSubjectsSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        trim: true,
    }
});

module.exports = mongoose.model('articlesubject', ArticleSubjectsSchema);
