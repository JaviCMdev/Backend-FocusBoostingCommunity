const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raidSchema = new Schema ({
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

const Raid = mongoose.model('Raid', raidSchema);
module.exports = Raid;