const Mount = require('../model/mount');

const MountController = {};

MountController.getAllMount = async (req, res) => {

    try {
        let result = await Mount.find({})
        // .populate('idUser')
        // .populate('idSerie')

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message" : "No hay ninguna Montura"})
        }
    } catch (e) {
        res.send(e)
    }
}

MountController.newMount = async (req, res) => {

    try {
        let mount = await Mount.create({
            name: req.body.name,
            price: req.body.price,
            img: req.body.img
        })

        if (mount) {
            res.send({ "Message": 'La Montura ha sido añadida con exito'})
        } else {
            res.send({ "Message": 'Ha ocurrido un error al añadir la Montura'})
        }
    } catch (e) {
        res.send(e)
    }
}

MountController.updateMount = async (req, res) => {

    let idmount = req.body.idmount;
    let newName = req.body.name;
    let newPrice = req.body.price;
    let newImg = req.body.img;
    
    try {
        let updated = await Mount.findOneAndUpdate(
            { _id: idmount },
            {
                name: newName,
                price: newPrice,
                img: newImg
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`Servicio actualizado`)
        }
    } catch (error) {
        res.send("Error al actualizar el servicio", error);
    }
};

MountController.deleteMount = async (req, res) => {
    let name = req.body.name;

    try {
        let deleted = await Mount.findOneAndDelete({
            name: name
        })

        if (deleted) {
            res.send({ "Message": `Mount ${deleted.name} borrada correctamente` })
        }
    } catch (error) {
        res.send("Error al borrar la Mount", error);
    }
};

module.exports = MountController