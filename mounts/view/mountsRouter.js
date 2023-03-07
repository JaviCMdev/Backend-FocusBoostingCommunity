const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');

const MountController = require('../controller/mountsController')

router.get('/getAll', MountController.getAllMount)
router.post('/newmount', isAdmin, MountController.newMount)
router.put('/updatemount', isAdmin, MountController.updateMount)
router.delete('/deletemount', isAdmin, MountController.deleteMount)


module.exports = router;