const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mountSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const Mount = mongoose.model('Mount', mountSchema);
module.exports = Mount;