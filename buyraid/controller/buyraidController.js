const Buyraid = require('../model/buyraid');
const dayjs = require('dayjs');


const BuyraidController = {};

BuyraidController.getAllBuyraid = async (req, res) => {

    try {
        let result = await Buyraid.find({})
        .populate('idUser')
        .populate('idRaid')

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message" : "No existen compras de raids"})
        }
    } catch (e) {
        res.send(e)
    }
}

BuyraidController.newBuyraid= async (req, res) => {

    try {
        let buyraid = await Buyraid.create({
            idUser: req.body.idUser,
            idRaid: req.body.idRaid,
            price: req.body.price,
            pending: "true",
            claimed: "false",
            done: "false",
            created: dayjs().format('DD-MM-YYYY')
        })

        if (buyraid) {
            res.send({ "Message": 'Se ha añadido el pedido'})
        } else {
            res.send({ "Message": 'Ha ocurrido un error con el pedido'})
        }
    } catch (e) {
        res.send("error" + e)
    }
}

BuyraidController.updateBuyraid = async (req, res) => {

    let idbuyraid = JSON.parse(req.body.data).idbuyraid;
    let newPending = JSON.parse(req.body.data).pending;
    let newClaimed = JSON.parse(req.body.data).claimed;
    let newClaimedby = JSON.parse(req.body.data).claimedby
    let newDone = JSON.parse(req.body.data).done;
    
    try {
        let updated = await Buyraid.findOneAndUpdate(
            { _id: idbuyraid },
            {
                pending: newPending,
                claimed: newClaimed,
                claimedby: newClaimedby,
                done: newDone,
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`Buyraid actualizado`)
            console.log(updated)
        }
    } catch (error) {
        res.send("Error al actualizar la venta de la raid", error);
        console.log("error" + error)
    }
};

BuyraidController.deleteBuyraid = async (req, res) => {
    let idraid = req.body.idraid;

    try {
        let deleted = await Buyraid.findOneAndDelete({
            _id: idraid
        })

        if (deleted) {
            res.send({ "Message": `Raid borrada correctamente` })
        }
    } catch (error) {
        res.send("Error al borrar la Raid", error);
    }
};

module.exports = BuyraidController