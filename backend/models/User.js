const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const urserSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

urserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', urserSchema);