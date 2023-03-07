const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serverSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    }
});

const Server = mongoose.model('Server', serverSchema);
module.exports = Server;