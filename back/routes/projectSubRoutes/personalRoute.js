/*
* Route for handling personal projects. From this route, users that are logged in can get, update
* or add their own projects, public or private, as well as get public ones.
*/

'use strict';

const express = require('express');
const router = express.Router();
const {project_post_personal, project_delete_personal, project_list_get_personal, project_get_personal, project_update_personal} = require('../../controllers/projectSubControllers/personalController')
const multer = require('multer');
const upload = multer({dest: './uploads/project'});

router.route('/')
    .get(project_list_get_personal)
    .post(
        upload.fields([{
            name: 'logo', maxCount: 1
        }, {
            name: 'images', maxCount: 6
        }]),
        project_post_personal)


router.route('/:id')
    .get(project_get_personal)
    .delete(project_delete_personal)
    .put(
        upload.fields([{
            name: 'logo', maxCount: 1
        }, {
            name: 'images', maxCount: 6
        }]),
        project_update_personal)

module.exports = router;