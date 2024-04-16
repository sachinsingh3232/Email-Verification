const express = require('express');
const { signup, login, confirmEmail } = require('../controllers');

const router = express.Router();
router.post('/register', signup)
router.post('/login', login)
router.get('/confirmEmail/:token', confirmEmail)

module.exports = router;