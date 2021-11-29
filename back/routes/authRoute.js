'use strict';
const express = require('express');
const router = express.Router();
const {login, logout} = require('../controllers/authController');
const flash = require('connect-flash');

router.post('/login', login);
router.get('/logout', logout)

module.exports = router;