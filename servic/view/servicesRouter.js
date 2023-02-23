const express = require('express');
const router = express.Router();

const auth = require('../../middlewares/auth');
const isAdmin = require('../../middlewares/isAdmin');

const ServicesController = require('../controller/servicesController')

router.get('/getAll', ServicesController.getAllServices)
router.post('/newservice', isAdmin, ServicesController.newService)
router.put('/updateservice', isAdmin, ServicesController.updateService)
router.delete('/deleteservice', isAdmin, ServicesController.deleteService)


module.exports = router;