const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    church: {
        type: String,
        required: true
    },
    parish: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const userModel = mongoose.model('User', UserSchema);
module.exports = userModel;