const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const MythicplusController = require('../controller/mythicplusController')

router.get('/getAll', MythicplusController.getAllMythicplus)
router.post('/newmythicplus', isAdmin, MythicplusController.newMythicplus)
router.put('/updatemythicplus', isAdmin, MythicplusController.updateMythicplus)
router.delete('/deletemythicplus', isAdmin, MythicplusController.deleteMythicplus)


module.exports = router;