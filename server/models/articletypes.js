const mongoose = require('mongoose');

const ArticleTypesSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true,
        trim: true,
    }
});

module.exports = mongoose.model('articletypes', ArticleTypesSchema);
