const { Router } = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout);
router.get('/user', authMiddleware, authController.checkUser);


module.exports = router;