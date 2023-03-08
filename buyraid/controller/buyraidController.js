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

    let idbuyraid = req.body.idbuyraid;
    let newClaimed = req.body.claimed;
    let newDone = req.body.done;
    
    try {
        let updated = await Buyraid.findOneAndUpdate(
            { _id: idbuyraid },
            {
                claimed: newClaimed,
                done: newDone,
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`Buyraid actualizado`)
        }
    } catch (error) {
        res.send("Error al actualizar la venta de la raid", error);
    }
};

module.exports = BuyraidController