const mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    isVerified: { type: Boolean, default: false },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);


