const Server = require('../model/server');
const serverController = {};

serverController.getAllservers = async (req, res) => {

    try {

        let result = await Server.find({});

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ "Message": "Server no encontrado" })
        }

    } catch (error) {
        res.json({error: error.message});
    }
};

serverController.newServer = async (req, res) => {

    try {

        let server = await Server.create({
            name: req.body.name,       
            location: req.body.location
        })

        if (server) {
            res.send({ "Message": `El servidor ${server.name} ha sido añadido` })
        }

    } catch (error) {
        res.json({error: error.message});
    }

};

serverController.updateServer = async (req, res) => {

    let newName = req.body.name;
    let newLocation = req.body.location;

    try {
        let updated = await Server.findOneAndUpdate(

            { _id: _id },

            {
                name: newName,
                location: newLocation
                
            }).setOptions({ returnDocument: 'after' })

        if (updated) {
            res.send(`Servidor actualizado`)
        }
    } catch (error) {
        res.json({error: error.message});
    }
};

serverController.deleteServer = async (req, res) => {
    let _id = req.body._id;

    try {
        let deleted = await Server.findOneAndDelete({
            _id: _id
        })

        if (deleted) {
            res.send({ "Message": `El servidor ${deleted.name} ha sido eliminado` })
        }
    } catch (error) {
        res.json({error: error.message});

    }
};

module.exports = serverController;