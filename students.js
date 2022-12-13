const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    city: String
})

module.exports = mongoose.model('student', StudentSchema)

