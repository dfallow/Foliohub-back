'use strict';

const express = require('express');
const passport = require('../utils/pass');
const personalRoute = require('./projectSubRoutes/personalRoute');
const adminRoute = require('./projectSubRoutes/adminRoute');
const {project_list_get, project_get} = require("../controllers/projectController");
const commentsRoute = require("./projectSubRoutes/commentsRoute");
const projectRatingRoute= require("./projectSubRoutes/projectRatingRoute");
const router = express.Router();

//Public routes
router.route('/')
    .get(project_list_get)

// Route -> /project/...

router.use('/personal', passport.authenticate('jwt', {session: false}), personalRoute);
router.use('/admin', passport.authenticate('jwt', {session:false}), adminRoute);
router.use('/comments', commentsRoute);
router.use('/projectRating', projectRatingRoute);

router.route('/:id')
    .get(project_get)

module.exports = router;