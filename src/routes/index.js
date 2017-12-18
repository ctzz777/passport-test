const Router = require('koa-router');
const authRouter = require('./auth');

const router = new Router({ prefix: '/api' });
router.use('/auth', authRouter.routes(), authRouter.allowedMethods());

module.exports = router;