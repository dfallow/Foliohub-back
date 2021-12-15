'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('./utils/pass');
const projectRoute = require('./routes/projectRoute');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const { httpError } = require('./utils/errors');

const app = express();
const port = 3001;

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'production') {
    require('./utils/production')(app, port);
} else {
    require('./utils/localhost')(app,8000, port);
}

app.get('/', (req, res) => {
    if (req.secure) {
        res.send('HELLO SECURE WORLD');
    } else {
        res.send('not secured');
    }
});

app.use(cors());
app.use(passport.initialize());

app.use('/uploads', express.static('uploads'));
//app.use('/thumbnails', express.static('thumbnails'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/auth', authRoute);
app.use('/project', projectRoute);
app.use('/user', userRoute);

app.use((req, res, next) => {
    const err = httpError('Not found', 404);
    next(err);
});

//app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}`));
