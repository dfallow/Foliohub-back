'use strict';

const express = require('express');
const {project_list_get, project_post} = require("../controllers/projectController");
const router = express.Router();

router.route('/')
    .get(project_list_get)
    .post(project_post)



module.exports = router;