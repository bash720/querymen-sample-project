const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, max: 100},
    email: { type: String, required: true},
    password: { type: String, required: true},
    role: { type: String, required: true},
    rating: { type: Number, required: true},
});

module.exports = mongoose.model('User', UserSchema);
