'use strict';
const express = require('express');
const {user_list_get, user_post, user_get, user_delete, user_update} = require("../controllers/userController");
const router = express.Router();

router.route('/')
    .get(user_list_get)
    .post(user_post)

router.route('/:id')
    .get(user_get)
    .delete(user_delete)
    .put(user_update)

module.exports = router;
