const mongoose = require('mongoose');

const EventsDBSchema = mongoose.Schema({
    name: String,
    location: String,
    precis: String,
    datetime: String,
    creator: Number
    // isbn13: String,
    // bookname: String,
    // authorsname: String,
    // read: Boolean,
    // returned: Boolean,
    // imagelink: String
})

module.exports.EventsDB = mongoose.model('Events', EventsDBSchema, 'Events');