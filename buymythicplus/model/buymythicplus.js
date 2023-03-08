const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchasemythicplusSchema = new Schema ({
    idUser: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    idMythicplus: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Mythicplus',
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

const Purchasemythicplus = mongoose.model('Purchasemythicplus', purchasemythicplusSchema);
module.exports = Purchasemythicplus;