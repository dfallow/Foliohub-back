'use strict';
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const projectRoute = require('./routes/projectRoute');
const userRoute = require('./routes/userRoute');
const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/project', projectRoute);
app.use('/user', userRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}`));
