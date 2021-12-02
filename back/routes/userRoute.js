'use strict';
const express = require('express');
const passport = require('../utils/pass');
const {user_list_get, user_post, user_get, user_delete, user_update, checkToken} = require("../controllers/userController");
const router = express.Router();

router.get('/token', checkToken);
router.route('/')
    .get(user_list_get)
    .post(user_post)
    .put(passport.authenticate('jwt', {session: false}), user_update)
    .delete(passport.authenticate('jwt', {session: false}), user_delete)

router.route('/:id')
    .get(user_get)



module.exports = router;
