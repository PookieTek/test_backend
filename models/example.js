const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const exampleSchema = mongoose.Schema({
    a: { type: String, required: true, unique: true },
    b: { type: String, required: true },
});

exampleSchema.plugin(uniqueValidator);
module.exports = mongoose.model('example', exampleSchema);