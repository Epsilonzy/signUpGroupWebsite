const mongoose = require('mongoose');
const config = require('../config/main.json');
mongoose.connect(config.mongoDBUrl + config.dataBase);

const { Schema } = mongoose;

const stdSchema = new Schema({
    stdId: {
        type: String,
        required: true
    },
    stdName: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    classNum: {
        type: String,
        required: true
    },
    stdQQ: String,
    stdPhone: String,
    organizationFirst: String,
    branchFirst: String,
    reasonFirst: String,
    organizationSecond: String,
    branchSecond: String,
    reasonSecond: String,
    isDispensing: Boolean
});
const db = {
    students: mongoose.model('students', stdSchema)
}
module.exports = db;