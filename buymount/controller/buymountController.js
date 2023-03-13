const Buymount = require('../model/buymount');
const dayjs = require('dayjs');


const BuymountController = {};

BuymountController.getAllBuymount = async (req, res) => {

    try {
        let result = await Buymount.find({})
        .populate('idUser')
        .populate('idMount')

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message" : "No existen compras de monturas"})
        }
    } catch (e) {
        res.send(e)
    }
}

BuymountController.newBuymount = async (req, res) => {

    try {
        let buymount = await Buymount.create({
            idUser: req.body.idUser,
            idMount: req.body.idMount,
            price: req.body.price,
            pending: "true",
            claimed: "false",
            done: "false",
            created: dayjs().format('DD-MM-YYYY')
        })

        if (buymount) {
            res.send({ "Message": 'Se ha añadido el pedido'})
        } else {
            res.send({ "Message": 'Ha ocurrido un error con el pedido'})
        }
    } catch (e) {
        res.send("error" + e)
    }
}

BuymountController.updateBuymount = async (req, res) => {

    let idbuymount = req.body.idbuymount;
    let newClaimed = req.body.claimed;
    let newDone = req.body.done;
    
    try {
        let updated = await Buymount.findOneAndUpdate(
            { _id: idbuymount },
            {
                claimed: newClaimed,
                done: newDone,
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`Buymount actualizado`)
        }
    } catch (error) {
        res.send("Error al actualizar la venta de montura", error);
    }
};
// De momento no voy a dejar que se puedan borrar

BuymountController.deleteBuymount = async (req, res) => {
    let idmount = req.body.idmount;

    try {
        let deleted = await Buymount.findOneAndDelete({
            _id: idmount
        })

        if (deleted) {
            res.send({ "Message": `Mount borrada correctamente` })
        }
    } catch (error) {
        res.send("Error al borrar la Mount", error);
    }
};

module.exports = BuymountController