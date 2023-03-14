const express = require('express');
const router = express.Router();

const UsersController = require('../controller/usersController');
const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

router.post("/newUser", UsersController.newUser);
router.post("/getAll",auth, isAdmin, UsersController.getAllUsers);
router.put("/updateUser",auth, isAdmin, UsersController.updateUser);
router.delete("/deleteUser",auth, isAdmin, UsersController.deleteUser);
router.post("/login", UsersController.loginUser);






module.exports = router;