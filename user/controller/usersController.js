const User = require('../model/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../../config/config');

const UsersController = {};

UsersController.newUser = async (req, res) => {

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));

    try {

        let user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: password,
            battletag: req.body.battletag,
            discord: req.body.discord,
            role: req.body.role,
            server: req.body.server
        })

        if (user) {
            res.send({ "Message": `El usuario ${user.name} se ha creado correctamente` })
        }
    } catch (error) {
        console.log(error)
    }

};



module.exports = UsersController;