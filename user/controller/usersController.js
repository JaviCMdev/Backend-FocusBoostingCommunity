const User = require('../model/user');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const authConfig = require('../../config/config');
const dayjs = require('dayjs');

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
            server: req.body.server,
            role: "user",
            created: dayjs().format('DD-MM-YYYY')
        })

        if (user) {
            res.send({ "Message": `El usuario ${user.name} se ha creado correctamente` })
        }
    } catch (error) {
        res.send("Error" + error)
    }

};

UsersController.getAllUsers = async (req, res) => {
    // let rol = req.body.rol;
    try {
        // if (rol == "admin") {
            let result = await User.find({})
                .populate('server');

            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({ "Message": "Usuario no encontrado" })
            }
        // }
    } catch (error) {
        res.send("error" + error);
    }
};

UsersController.updateUser = async (req, res) => {

    // let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.ROUNDS));

    let iduser = req.body.iduser;
    let newName = req.body.name;
    let newEmail = req.body.email;
    // let newPassword = password;
    let newBattletag = req.body.battletag;
    let newDiscord = req.body.discord;
    let newRole = req.body.role;
    let newServer = req.body.server;
    

    try {
        let updated = await User.findOneAndUpdate(
            { _id: iduser },
            {
                name: newName,
                email: newEmail,
                // password: newPassword,
                battletag: newBattletag,
                discord: newDiscord,
                role: newRole,
                server: newServer
            }).setOptions({ returnDocument: 'after' })
        if (updated) {
            res.send(`Usuario actualizado`)
        }
    } catch (error) {
        res.send("Error al actualizar el usuario", error);
    }
};

UsersController.deleteUser = async (req, res) => {
    let battletag = req.body.battletag;

    try {
        let deleted = await User.findOneAndDelete({
            battletag: battletag
        })

        if (deleted) {
            res.send({ "Message": `Usuario ${deleted.name} borrado correctamente` })
        }
        else {
            return res.send({"Message" : "Ha ocurrido un error al borrar."})
        }
    } catch (error) {
        res.send("Error al borrar usuario", error);
    }
};

UsersController.loginUser = async (req, res) => {

    try {
        let userFound = await User.find({
            email: req.body.email
        })
        if (userFound) {

            if (userFound[0].email === undefined) {
                res.send("Contraseña o usuario incorrecto");
            } else {
                if (bcrypt.compareSync(req.body.password, userFound[0].password)) {
                    console.log(userFound[0])
                    let token = jsonwebtoken.sign({ id: userFound[0]._id, rol: userFound[0].role }, authConfig.SECRET, {
                        expiresIn: authConfig.EXPIRES
                    });
                    let loginOk = `Bienvenido de nuevo, ${userFound[0].name}`;
                    res.json({
                        loginOk,
                        token: token,
                        userFound: userFound
                    })

                } else {
                    res.send("Contraseña o usuario incorrecto");
                }
            }

        }
    } catch (error) {
        res.send("Contraseña o usuario incorrecto");
    }
};


module.exports = UsersController;