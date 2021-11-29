'use strict';

const express = require('express');
const router = express.Router();
const {project_post_personal, project_delete_personal, project_list_get_personal, project_get_personal, project_update_personal} = require('../../controllers/projectSubControllers/personalController')

router.route('/')
    .get(project_list_get_personal)
    .post(project_post_personal)

router.route('/:id')
    .get(project_get_personal)
    .delete(project_delete_personal)
    .put(project_update_personal)

module.exports = router;