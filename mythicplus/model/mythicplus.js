const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mythicplusSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
});

const Mythicplus = mongoose.model('Mythicplus', mythicplusSchema);
module.exports = Mythicplus;