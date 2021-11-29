'use strict';

const express = require('express');
const {project_list_get, project_post, project_get, project_delete, project_update} = require("../controllers/projectController");
const router = express.Router();

router.route('/')
    .get(project_list_get)
    .post(project_post)

router.route('/:id')
    .get(project_get)
    .delete(project_delete)
    .put(project_update)


module.exports = router;