'use strict';

const express = require('express');
const {project_list_get, project_post, project_get} = require("../controllers/projectController");
const router = express.Router();

router.route('/')
    .get(project_list_get)
    .post(project_post)

router.route('/:id')
    .get(project_get)


module.exports = router;