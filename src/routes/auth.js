const Router = require('koa-router');
const router = new Router();
const authController = require('../controllers/auth');

router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/checkAuth', authController.checkAuth);


module.exports = router;