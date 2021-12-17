/*
* Module used for passport functionality
*/

'use strict';

const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const {getUserLogin} = require("../models/userModel");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new Strategy(async (username, password, done) => {
    const params = [username];
    try {
        const [user] = await getUserLogin(params)
        if (user === undefined) {
            return done(null, false, {message: 'Incorrect email'})
        }
        if (user.password !== password) {
            return done(null, false, {message: 'Incorrect password'});
        }
        delete user.password;
        return done(null, {...user}, {message: 'Logged in Successfully'});
    } catch (e) {
        return done(e);
    }
}));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : process.env.JWT_SECRET
    }, (jwtPayload, done) => {
        return done(null, jwtPayload);
    }
));

module.exports = passport;