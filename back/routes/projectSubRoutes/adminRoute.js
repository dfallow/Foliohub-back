'use strict';

const express = require('express');
const router = express.Router();
const {project_list_get_admin, project_delete_admin, project_get_admin, project_post_admin, project_update_admin} = require('../../controllers/projectSubControllers/adminController')

router.route('/')
    .get(project_list_get_admin)
    .post(project_post_admin)

router.route('/:id')
    .get(project_get_admin)
    .delete(project_delete_admin)
    .put(project_update_admin)

module.exports = router;