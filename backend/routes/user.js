// import
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const checkEmail = require('../middleware/email-validator');
const checkPassword = require('../middleware/password-validator');


// routes
router.post('/signup', checkEmail, checkPassword, userCtrl.signup);
router.post('/login',  userCtrl.login);

// export
module.exports = router;