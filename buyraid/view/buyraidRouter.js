const express = require('express');
const router = express.Router();

// const isAdmin = require('../../middlewares/isAdmin');
const auth = require('../../middlewares/auth');

const BuyraidController = require('../controller/buyraidController')

router.post('/getAll', auth, BuyraidController.getAllBuyraid)
router.post('/newbuyraid', auth, BuyraidController.newBuyraid)
router.put('/updatebuyraid', auth, BuyraidController.updateBuyraid)

module.exports = router;