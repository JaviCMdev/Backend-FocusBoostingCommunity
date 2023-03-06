const express = require('express');

const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const serverController = require('../controller/serverController')

router.get('/getAll', isAdmin, serverController.getAllservers);
router.post("/newServer", isAdmin, serverController.newServer);
router.put("/updateServer", isAdmin, serverController.updateServer);
router.delete("/deleteServer", isAdmin, serverController.deleteServer);


module.exports = router;