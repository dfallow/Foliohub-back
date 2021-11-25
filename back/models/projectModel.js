'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllProjects = async () => {
    try {
        const query = 'SELECT * FROM projects'
        const [rows] = await promisePool.query(query);
        console.log('getAllProjects rows: ', rows)
        return rows;
    } catch (e) {
        console.error('getAllProjects query error: ', e.message);
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

const deleteProject = async (project) => {
    try {
        let sql = 'DELETE FROM projects WHERE id = ?';
        let params = [project.id];
        const [row] = await promisePool.query(sql, params);
        return row.affectedRows === 1;
    } catch (e) {
        console.error('delete project error', e.message);
    }
}

module.exports = {
    getAllProjects,
    getProject,
    insertProject,
    deleteProject,
}