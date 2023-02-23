const Service = require('../model/service');

const ServicesController = {};

ServicesController.getAllServices = async (req, res) => {

    try {
        let result = await Service.find({})
        // .populate('idUser')
        // .populate('idSerie')

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message" : "No hay ningun servicio."})
        }
    } catch (e) {
        res.send(e)
    }
}

ServicesController.newService = async (req, res) => {

    try {
        let service = await Service.create({
            name: req.body.name,
            price: req.body.price,
            img: req.body.img
        })

        if (service) {
            res.send({ "Message": 'El servicio se ha realizado con exito'})
        } else {
            res.send({ "Message": 'Ha ocurrido un error con el servicio'})
        }
    } catch (e) {
        res.send(e)
    }
}

ServicesController.updateService = async (req, res) => {

    let idservice = req.body.idservice;
    let newName = req.body.name;
    let newPrice = req.body.price;
    let newImg = req.body.img
    
    try {
        let updated = await Service.findOneAndUpdate(
            { _id: idservice },
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

ServicesController.deleteService = async (req, res) => {
    let name = req.body.name;

    try {
        let deleted = await Service.findOneAndDelete({
            name: name
        })

        if (deleted) {
            res.send({ "Message": `Servicio ${deleted.name} borrado correctamente` })
        }
    } catch (error) {
        res.send("Error al borrar el servicio", error);
    }
};

module.exports = ServicesController