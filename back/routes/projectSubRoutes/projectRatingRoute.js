/*
* Route for projects ratings. One needs to authenticate to post or put.
*/

'use strict';

const express = require('express');
const passport = require("../../utils/pass");
const {project_rating_get, project_rating_post, project_rating_update, project_rating_get_own} = require("../../controllers/projectSubControllers/projectRatingController");
const router = express.Router();

router.route('/:projectId')
    .get(project_rating_get)
    .post(
        passport.authenticate('jwt', {session: false}),
        project_rating_post)
    .put(
        passport.authenticate('jwt', {session: false}),
        project_rating_update)

//for fetching personal rating of project
router.get('/own/:projectId', passport.authenticate('jwt', {session: false}), project_rating_get_own)

module.exports = router;