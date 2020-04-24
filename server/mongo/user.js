const mongoose = require('mongoose');
const config = require('../config/main.json');
mongoose.connect(config.mongoDBUrl + config.dataBase);

const { Schema } = mongoose;

const userSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    }
});
const db = {
    users: mongoose.model('users', userSchema)
}
module.exports = db;