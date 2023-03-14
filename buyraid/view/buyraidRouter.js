const express = require('express');
const router = express.Router();

const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');
const isBooster = require('../../middlewares/isBooster')


const BuyraidController = require('../controller/buyraidController')

router.get('/getAll',auth, BuyraidController.getAllBuyraid)
router.post('/newbuyraid', auth, BuyraidController.newBuyraid)
router.put('/updatebuyraid', auth, isBooster, BuyraidController.updateBuyraid)
router.delete('/deletebuyraid', auth, isAdmin, BuyraidController.deleteBuyraid)

module.exports = router;