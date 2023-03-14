const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const MythicplusController = require('../controller/mythicplusController')

router.get('/getAll', MythicplusController.getAllMythicplus)
router.post('/newmythicplus',auth, isAdmin, MythicplusController.newMythicplus)
router.put('/updatemythicplus',auth, isAdmin, MythicplusController.updateMythicplus)
router.delete('/deletemythicplus',auth, isAdmin, MythicplusController.deleteMythicplus)


module.exports = router;