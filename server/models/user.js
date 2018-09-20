const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    Username: {
        type: String,
        trim: true,
        required: true,
    },
    Password: {
        type: String,
        trim: true,
        required: true,
    }
})

module.exports = mongoose.model('User', usersSchema);
