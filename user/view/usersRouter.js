const express = require('express');
const router = express.Router();

const UsersController = require('../controller/usersController');
// const isAdmin = require('../middlewares/isAdmin');
// const auth = require('../middlewares/auth');

router.post("/newUser", UsersController.newUser);





module.exports = router;