const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    battletag: {
        type: String,
        required: true
    },
    discord: {
        type: String,
        required: true
    },
    server: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Server',
        required: true
    },
    role: {
        type: String,
    },
    created: {
        type: Date
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;