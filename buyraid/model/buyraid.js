const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseraidSchema = new Schema ({
    idUser: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    idRaid: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Raid',
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
        type: String
    },
    claimedby: {
        type: String
    }
});

const Purchaseraid = mongoose.model('Purchaseraid', purchaseraidSchema);
module.exports = Purchaseraid;