const { Router } = require('express');
const { signup, login, logout, checkUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.get('/user', authMiddleware, checkUser);


module.exports = router;