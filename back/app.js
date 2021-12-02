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

app.use(cors());
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/auth', authRoute);
app.use('/project', projectRoute);
app.use('/user', userRoute);

app.use((req, res, next) => {
    const err = httpError('Not found', 404);
    next(err);
});

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}`));
