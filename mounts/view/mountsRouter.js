const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');


const MountController = require('../controller/mountsController')

router.get('/getAll', MountController.getAllMount)
router.post('/newmount',auth, isAdmin, MountController.newMount)
router.put('/updatemount',auth, isAdmin, MountController.updateMount)
router.delete('/deletemount',auth, isAdmin, MountController.deleteMount)


module.exports = router;