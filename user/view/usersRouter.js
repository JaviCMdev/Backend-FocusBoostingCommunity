const express = require('express');
const router = express.Router();

const UsersController = require('../controller/usersController');
const isAdmin = require('../../middlewares/isAdmin');
// const auth = require('../middlewares/auth');

router.post("/newUser", UsersController.newUser);
router.post("/getAll", isAdmin, UsersController.getAllUsers);
router.put("/updateUser", UsersController.updateUser);
router.delete("/deleteUser", isAdmin, UsersController.deleteUser);
router.post("/login", UsersController.loginUser);






module.exports = router;