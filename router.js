const router = require('express').Router();

const usersRouter = require('./user/view/usersRouter');
const mythicplusRouter = require('./mythicplus/view/mythicplusRouter');
const raidRouter = require('./raids/view/raidsRouter');
const mountRouter = require('./mounts/view/mountsRouter');
const serverRouter = require('./servuser/view/serverRouter');
const buymountRouter = require('./buymount/view/buymountRouter')
const buyraidRouter = require('./buyraid/view/buyraidRouter')

router.use('/users', usersRouter);
router.use('/mythicplus', mythicplusRouter)
router.use('/raid', raidRouter)
router.use('/mount', mountRouter)
router.use('/servers', serverRouter)
router.use('/buymount', buymountRouter)
router.use('/buyraid', buyraidRouter)

module.exports = router