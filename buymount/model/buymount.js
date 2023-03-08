const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema ({
    idUser: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    idMount: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Mount',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    pending: {
        type: Boolean
    },
    claimed: {
        type: Boolean
    },
    done: {
        type: Boolean
    },
    created: {
        type: Date
    }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;