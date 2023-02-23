const router = require('express').Router();

const usersRouter = require('./user/view/usersRouter');
const servicesRouter = require('./servic/view/servicesRouter');

router.use('/users', usersRouter);
router.use('/services', servicesRouter)

module.exports = router