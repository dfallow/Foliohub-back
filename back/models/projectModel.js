'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllProjects = async () => {
    try {
        const query = 'SELECT * FROM projects'
        const [rows] = await promisePool.query(query);
        return rows;
    } catch (e) {
        console.error('getAllProjects query', e.message);
    }
};

const getProject = async (projectId) => {
    try {
        const query = 'SELECT * FROM projects WHERE id = ?'
        const [rows] = await promisePool.query(query, [projectId]);
        return rows[0];
    } catch (e) {
        console.error('getProject query', e.message);
    }
};

const insertProject = async (project) => {
    try {
        const query = 'INSERT INTO projects(name, date, description) VALUES (?, ?, ?)'
        const params = [project.name, project.date, project.description];
        const [rows] = await promisePool.query(query, params);
        console.log('model insert Project', rows);
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('model insert Project', e.message);
    }
}


module.exports = {
    getAllProjects,
    getProject,
}