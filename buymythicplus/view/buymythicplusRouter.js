const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const buymythicplusController = require('../controller/buymythicplusController')

router.get('/getAll', buymythicplusController.getAllBuymythicplus)
router.post('/newbuymythicplus', auth, buymythicplusController.newBuymythicplus)
router.put('/updatebuymythicplus', auth, buymythicplusController.updateBuymythicplus)
router.delete('/deletebuymythicplus', isAdmin, buymythicplusController.deleteBuymythicplus)


module.exports = router;