const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const RaidController = require('../controller/raidsController')

router.get('/getAll', RaidController.getAllRaid)
router.post('/newraid', isAdmin, RaidController.newRaid)
router.put('/updateraid', isAdmin, RaidController.updateRaid)
router.delete('/deleteraid', isAdmin, RaidController.deleteRaid)


module.exports = router;