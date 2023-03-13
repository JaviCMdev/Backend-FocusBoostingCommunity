const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');
const isBooster = require('../../middlewares/isBooster')

const BuymountController = require('../controller/buymountController')

router.get('/getAll', BuymountController.getAllBuymount)
router.post('/newbuymount', auth, BuymountController.newBuymount)
router.put('/updatebuymount', isBooster, BuymountController.updateBuymount)
router.delete('/deletebuymount', isAdmin, BuymountController.deleteBuymount)


module.exports = router;