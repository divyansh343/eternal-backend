const { registerController } = require('../../controllers/auth/RegisterController');

const router = require('express').Router();

router.post('/register',registerController)
// router.post('/login',signInController)

module.exports = router;