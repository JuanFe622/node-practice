const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
    subject_name: {type: String, require: true},
    code: {type: String, require: true, unique: true},
    credit: {type: Number, require: true},
    hours: {type: Number, require: true}
})

module.exports = mongoose.model('SubjectCollection', subjectSchema);
