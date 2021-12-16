'use strict';

const express = require('express');
const {user_update_admin, user_list_get_admin, user_get_admin, user_delete_admin} = require("../controllers/userAdminController");
const router = express.Router;

router.route('/')
    .get(user_list_get_admin)

router.route('/:id')
    .get(user_get_admin)
    .delete(user_delete_admin)
    .update(user_update_admin)

module.exports = router;
