/*
* Route to authenticate and retrieve a token or logging out
*/

'use strict';
const express = require('express');
const router = express.Router();
const {login, logout} = require('../controllers/authController');

router.post('/login', login);
router.get('/logout', logout);

module.exports = router;