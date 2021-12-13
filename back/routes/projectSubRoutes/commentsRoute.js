'use strict';

const express = require('express');
const router = express.Router();
const passport = require('../../utils/pass');
const {comment_list_get, project_post_comment, project_delete_comment} = require("../../controllers/projectSubControllers/commentsController");

router.route('/')
    .post(project_post_comment)
    .delete(project_delete_comment)

router.route('/:id')
    .get(comment_list_get)



module.exports = router;