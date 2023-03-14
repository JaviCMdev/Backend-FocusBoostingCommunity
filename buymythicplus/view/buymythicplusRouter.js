const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');
const isBooster = require('../../middlewares/isBooster')


const buymythicplusController = require('../controller/buymythicplusController')

router.get('/getAll',auth, buymythicplusController.getAllBuymythicplus)
router.post('/newbuymythicplus', auth, buymythicplusController.newBuymythicplus)
router.put('/updatebuymythicplus',auth, isBooster, buymythicplusController.updateBuymythicplus)
router.delete('/deletebuymythicplus',auth, isAdmin, buymythicplusController.deleteBuymythicplus)


module.exports = router;