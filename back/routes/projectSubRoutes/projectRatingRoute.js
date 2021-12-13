'use strict';

const express = require('express');
const {project_rating_get, project_rating_post, project_rating_update} = require("../../controllers/projectSubControllers/projectRatingController");
const router = express.Router();

router.route('/:projectId')
    .get(project_rating_get)
    .post(project_rating_post)
    .put(project_rating_update)

module.exports = router;