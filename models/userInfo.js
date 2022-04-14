const mongoose = require('mongoose');

const userInfoSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    hashedPw: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    adminUser: {
        type: Boolean,
        default: false
    }

});

module.exports.userInfo = mongoose.model('userInfo', userInfoSchema, 'userInfo');