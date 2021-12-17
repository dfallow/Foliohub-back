/*
* Route for project comments. One needs authentication to post or delete. Getting is public.
*/

'use strict';

const express = require('express');
const router = express.Router();
const {comment_list_get, project_post_comment, project_delete_comment} = require("../../controllers/projectSubControllers/commentsController");
const passport = require("../../utils/pass");

router.route('/')
    .post(passport.authenticate('jwt', {session:false}), project_post_comment)
    .delete(passport.authenticate('jwt', {session:false}), project_delete_comment)

//project id
router.route('/:id')
    .get(comment_list_get)

module.exports = router;