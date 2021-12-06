'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllProjects = async () => {
    try {
        const query = 'SELECT * FROM projects WHERE private = 0';
        const [rows] = await promisePool.query(query);
        console.log('getAllProjects rows: ', rows)
        return rows;
    } catch (e) {
        console.error('getAllProjects query error: ', e.message);
    }
};

const getProject = async (projectId) => {
    try {
        const query = 'SELECT * FROM projects WHERE id = ? AND private = 0'
        const [rows] = await promisePool.query(query, [projectId]);
        return rows[0];
    } catch (e) {
        console.error('getProject query', e.message);
    }
};

const insertProject = async (project) => {
    try {
        const query = 'INSERT INTO projects(name, date, description, video, images, outline, logo, tags, author, private) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        const params = [project.name, project.date, project.description, project.video, project.images, project.outline, project.logo, project.tags, project.author, project.private];
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
    insertProject,
}