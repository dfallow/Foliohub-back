'use strict';

const express = require('express');
const projectRoute = require('./routes/projectRoute');

const app = express();
const port = 3000;

app.use('/project', projectRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}`));