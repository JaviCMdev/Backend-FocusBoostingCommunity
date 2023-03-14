const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const serverController = require('../controller/serverController')

router.get('/getAll', serverController.getAllservers);
router.post("/newServer",auth, isAdmin, serverController.newServer);
router.put("/updateServer",auth, isAdmin, serverController.updateServer);
router.delete("/deleteServer",auth, isAdmin, serverController.deleteServer);


module.exports = router;