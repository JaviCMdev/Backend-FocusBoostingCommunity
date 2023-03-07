const Raid = require('../model/raid');

const RaidController = {};

RaidController.getAllRaid = async (req, res) => {

    try {
        let result = await Raid.find({})
        // .populate('idUser')
        // .populate('idSerie')

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message" : "No hay ninguna Raid"})
        }
    } catch (e) {
        res.send(e)
    }
}

RaidController.newRaid = async (req, res) => {

    try {
        let raid = await Raid.create({
            name: req.body.name,
            price: req.body.price,
        })

        if (raid) {
            res.send({ "Message": 'La Raid ha sido añadida con exito'})
        } else {
            res.send({ "Message": 'Ha ocurrido un error al añadir la Raid'})
        }
    } catch (e) {
        res.send(e)
    }
}

RaidController.updateRaid = async (req, res) => {

    let idraid = req.body.idraid;
    let newName = req.body.name;
    let newPrice = req.body.price;
    
    try {
        let updated = await Raid.findOneAndUpdate(
            { _id: idraid },
            {
                name: newName,
                price: newPrice,
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`Raid actualizado`)
        }
    } catch (error) {
        res.send("Error al actualizar la raid", error);
    }
};

RaidController.deleteRaid = async (req, res) => {
    let name = req.body.name;

    try {
        let deleted = await Raid.findOneAndDelete({
            name: name
        })

        if (deleted) {
            res.send({ "Message": `Raid ${deleted.name} borrada correctamente` })
        }
    } catch (error) {
        res.send("Error al borrar la Raid", error);
    }
};

module.exports = RaidController