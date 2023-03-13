const Buymythicplus = require('../model/buymythicplus');
const dayjs = require('dayjs');


const BuymythicplusController = {};

BuymythicplusController.getAllBuymythicplus = async (req, res) => {

    try {
        let result = await Buymythicplus.find({})
        .populate('idUser')
        .populate('idMythicplus')

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message" : "No existen compras de monturas"})
        }
    } catch (e) {
        res.send(e)
    }
}

BuymythicplusController.newBuymythicplus = async (req, res) => {

    try {
        let buymythicplus = await Buymythicplus.create({
            idUser: req.body.idUser,
            idMythicplus: req.body.idMythicplus,
            price: req.body.price,
            pending: "true",
            claimed: "false",
            done: "false",
            created: dayjs().format('DD-MM-YYYY')
        })

        if (buymythicplus) {
            res.send({ "Message": 'Se ha añadido el pedido'})
        } else {
            res.send({ "Message": 'Ha ocurrido un error con el pedido'})
        }
    } catch (e) {
        res.send("error" + e)
    }
}

BuymythicplusController.updateBuymythicplus = async (req, res) => {

    let idbuymythicplus = req.body.idbuymythicplus;
    let newClaimed = req.body.claimed;
    let newDone = req.body.done;
    
    try {
        let updated = await Buymythicplus.findOneAndUpdate(
            { _id: idbuymythicplus },
            {
                claimed: newClaimed,
                done: newDone,
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`Buymythicplus actualizado`)
        }
    } catch (error) {
        res.send("Error al actualizar la venta de montura", error);
    }
};

BuymythicplusController.deleteBuymythicplus = async (req, res) => {
    let idmythicplus = req.body.idmythicplus;

    try {
        let deleted = await Buymythicplus.findOneAndDelete({
            _id: idmythicplus
        })

        if (deleted) {
            res.send({ "Message": `Mythic+ borrada correctamente` })
        }
    } catch (error) {
        res.send("Error al borrar la Mythic+", error);
    }
};

module.exports = BuymythicplusController