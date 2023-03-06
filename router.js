const router = require('express').Router();

const usersRouter = require('./user/view/usersRouter');
const servicesRouter = require('./servic/view/servicesRouter');
const serverRouter = require('./servuser/view/serverRouter');


router.use('/users', usersRouter);
router.use('/services', servicesRouter)
router.use('/servers', serverRouter)


module.exports = router