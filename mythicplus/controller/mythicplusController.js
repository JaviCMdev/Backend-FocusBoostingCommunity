const Mythicplus = require('../model/mythicplus');

const MythicplusController = {};

MythicplusController.getAllMythicplus = async (req, res) => {

    try {
        let result = await Mythicplus.find({})
        // .populate('idUser')
        // .populate('idSerie')

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message" : "No hay ninguna Mythic+"})
        }
    } catch (e) {
        res.send(e)
    }
}

MythicplusController.newMythicplus = async (req, res) => {

    try {
        let mythicplus = await Mythicplus.create({
            name: req.body.name,
            price: req.body.price,
        })

        if (mythicplus) {
            res.send({ "Message": 'La Mythic+ ha sido añadida con exito'})
        } else {
            res.send({ "Message": 'Ha ocurrido un error al añadir la Mythic+'})
        }
    } catch (e) {
        res.send(e)
    }
}

MythicplusController.updateMythicplus = async (req, res) => {

    let idmythicplus = req.body.idmythicplus;
    let newName = req.body.name;
    let newPrice = req.body.price;
    
    try {
        let updated = await Mythicplus.findOneAndUpdate(
            { _id: idmythicplus },
            {
                name: newName,
                price: newPrice,
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`Servicio actualizado`)
        }
    } catch (error) {
        res.send("Error al actualizar el servicio", error);
    }
};

MythicplusController.deleteMythicplus = async (req, res) => {
    let name = req.body.name;

    try {
        let deleted = await Mythicplus.findOneAndDelete({
            name: name
        })

        if (deleted) {
            res.send({ "Message": `Mythic+ ${deleted.name} borrada correctamente` })
        }
    } catch (error) {
        res.send("Error al borrar la Mythic+", error);
    }
};

module.exports = MythicplusController