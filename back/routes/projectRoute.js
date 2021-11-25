'use strict';

const express = require('express');
const {project_list_get} = require("../controllers/projectController");
const router = express.Router();

router.route('/')
    .get(project_list_get)



module.exports = router;