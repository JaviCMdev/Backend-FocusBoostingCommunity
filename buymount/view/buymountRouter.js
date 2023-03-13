const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const BuymountController = require('../controller/buymountController')

router.get('/getAll', BuymountController.getAllBuymount)
router.post('/newbuymount', auth, BuymountController.newBuymount)
router.put('/updatebuymount', auth, BuymountController.updateBuymount)

// Delete bloqueado por el momento
router.delete('/deletebuymount', isAdmin, BuymountController.deleteBuymount)


module.exports = router;