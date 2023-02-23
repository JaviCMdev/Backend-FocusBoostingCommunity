const router = require('express').Router();

const usersRouter = require('./user/view/usersRouter');


router.use('/users', usersRouter);


module.exports = router