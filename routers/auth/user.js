const { loginController } = require('../../controllers/auth/LoginController');
const { profileController, passController, detailsController } = require('../../controllers/auth/profileController');
const { registerController } = require('../../controllers/auth/RegisterController');
const tokenMiddleware = require('../../middlewares/tokenMiddleware');

const router = require('express').Router();

//auth
router.post('/register',registerController)
router.post('/login',loginController)

//profile
router.get('/details', tokenMiddleware, detailsController)
router.post('/name', tokenMiddleware, profileController)
router.post('/password', tokenMiddleware, passController)

module.exports = router;