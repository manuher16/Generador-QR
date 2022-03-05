const router = require('express').Router();
const { newUser, userLogin } = require('../controllers/user.controller');
const registerValid = require('../middlewares/register');
const loginValid = require('../middlewares/login');

router.post('/register', registerValid, newUser);
router.post('/login', loginValid, userLogin);

module.exports = router;