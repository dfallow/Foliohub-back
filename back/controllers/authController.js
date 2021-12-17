/*
* Controller for logging in and getting a token or logging out.
*/

'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');
const {httpError} = require('../utils/errors');

const login = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        console.log('local params', err, user, info);
        if (err || !user) {
            return res.json({message: "username / password incorrect"});
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                next(httpError('login error', 400));
                return;
            }
            const token = jwt.sign(user, process.env.JWT_SECRET);
            return res.json({ user, token });
        });
    })(req, res, next);
};

const logout = (req, res) => {
    req.logout();
    res.json({message: 'logged out'});
};


module.exports = {
    login,
    logout,
};