const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');
const isBooster = require('../../middlewares/isBooster')

const BuymountController = require('../controller/buymountController')

router.get('/getAll',auth, BuymountController.getAllBuymount)
router.post('/newbuymount', auth, BuymountController.newBuymount)
router.put('/updatebuymount',auth, isBooster, BuymountController.updateBuymount)
router.delete('/deletebuymount',auth, isAdmin, BuymountController.deleteBuymount)


module.exports = router;