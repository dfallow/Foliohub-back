'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllProjects = async () => {
    try {
        const query = `SELECT * FROM projects`
        const [rows] = await promisePool.query(query);
        return rows;
    } catch (e) {
        console.error('getAllProjects query', e.message);
    }
};

// const projects = [
//     {
//         name: 'Best app ever',
//         date: '23-09-2020',
//         description: 'Simply the best',
//         video: '',
//         pictures: []
//     }
// ]

module.exports = {
    getAllProjects,
}