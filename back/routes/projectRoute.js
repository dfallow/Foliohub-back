'use strict';

const express = require('express');
const passport = require('../utils/pass');
const personalRoute = require('./projectSubRoutes/personalRoute');
const adminRoute = require('./projectSubRoutes/adminRoute');
const {project_list_get, project_post, project_get} = require("../controllers/projectController");
const commentsRoute = require("./projectSubRoutes/commentsRoute");
const router = express.Router();

//Public routes
router.route('/')
    .get(project_list_get)
    .post(project_post)

router.use('/personal', passport.authenticate('jwt', {session: false}), personalRoute);
router.use('/admin', passport.authenticate('jwt', {session:false}), adminRoute);
router.use('/comments', passport.authenticate('jwt', {session:false}), commentsRoute);

router.route('/:id')
    .get(project_get)

module.exports = router;