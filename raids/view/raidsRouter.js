const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const RaidController = require('../controller/raidsController')

router.get('/getAll', RaidController.getAllRaid)
router.post('/newraid',auth, isAdmin, RaidController.newRaid)
router.put('/updateraid',auth, isAdmin, RaidController.updateRaid)
router.delete('/deleteraid',auth, isAdmin, RaidController.deleteRaid)


module.exports = router;