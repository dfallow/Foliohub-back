/*
* User route
*/

'use strict';
const express = require('express');
const passport = require('../utils/pass');
const {user_list_get, user_post, user_get, user_delete, user_update, checkToken, refreshToken} = require("../controllers/userController");
const userAdminRoute = require('../routes/userAdminRoute');
const router = express.Router();
const {body} = require('express-validator');
const multer = require("multer");
const fileFilter = (req, file, cb) => {
    if (file.mimetype.includes('image')) {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only images allowed'))
    }
}
const upload = multer({dest: './uploads/user', fileFilter});

router.get('/token',passport.authenticate('jwt', {session: false}), checkToken);
// this route allows to refresh a token after updating a profile by retrieving the credentials of a user
// which can be used to login again
router.get('/refreshToken', passport.authenticate('jwt', {session: false}), refreshToken);
// route for admins to manage users
router.use('/admin', passport.authenticate('jwt', {session:false}), userAdminRoute);

// route for managing users (get all, post, put and delete)
router.route('/')
    .get(user_list_get)
    .post(
        upload.single('profilePic'),
        body('email').notEmpty().isEmail(),
        body('password').notEmpty().isLength({min: 6}),
        body('username').notEmpty().isLength({max: 30}),
        body('creationDate').notEmpty(),
        body('github').isURL(),
        body('description').isLength({max: 60}),
        body('tags').isLength({max: 159}),
        body('title').isLength({max: 15}),
        user_post)
    .put(
        passport.authenticate('jwt', {session: false}),
        upload.single('profilePic'),
        body('email').isEmail(),
        body('password').notEmpty().isLength({min:6}),
        body('username').notEmpty().isLength({max: 30}),
        body('creationDate').notEmpty(),
        body('github').isURL(),
        body('description').isLength({max: 60}),
        body('tags').isLength({max: 35}),
        body('title').isLength({max: 15}),
        user_update)
    .delete(passport.authenticate('jwt', {session: false}), user_delete)

router.route('/:id')
    .get(user_get)

module.exports = router;
