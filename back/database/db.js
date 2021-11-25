'use strict';
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'sam',
    password: 'database',
    database: 'foliodb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    dateStrings: 'date',
});

module.exports = pool;
