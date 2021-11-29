'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllProjectsPersonal = async (user) => {
    try {
        const sql = 'SELECT * FROM projects WHERE private = 0 OR author = ?'
        let params = [user.userId];
        const [rows] = await promisePool.query(sql, params);
        console.log('getAllProjectsPersonal: ', rows)
        return rows;
    } catch (e) {
        console.error('getAllProjectsPersonal query error: ', e.message);
    }
};

const getProjectPersonal = async (projectId, user) => {
    try {
        const query = 'SELECT * FROM projects WHERE id = ? AND author = ?'
        const [rows] = await promisePool.query(query, [projectId], user.userId);
        return rows[0];
    } catch (e) {
        console.error('getProject query', e.message);
    }
};

const insertProjectPersonal = async (project) => {
    try {
        const query = 'INSERT INTO projects(name, date, description, video, images, outline, logo, tags, author, private) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        const params = [project.name, project.date, project.description, project.video, project.images, project.outline, project.logo, project.tags, project.author, project.private];
        const [rows] = await promisePool.query(query, params);
        console.log('insert project personal', rows);
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('insert project personal query', e.message);
    }
}

const updateProjectPersonal = async (project, user) => {
    try {
        let sql = 'UPDATE projects SET name = ?, date = ?, description = ?, video = ?, images = ?, outline = ?, logo = ?, tags = ? WHERE id = ? AND author = ?'
        let params = [project.name, project.date, project.description, project.video, project.images, project.outline, project.logo, project.tags, project.id, user.userId];
        const [rows] = await promisePool.query(sql, params);
        console.log('update project personal', rows)
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('update project personal error', e.message);
    }
}

const deleteProjectPersonal = async (project, user) => {
    try {
        let sql = 'DELETE FROM projects WHERE id = ? AND author = ?';
        let params = [project.id, user.userId];
        const [row] = await promisePool.query(sql, params);
        console.log('delete project personal')
        return row.affectedRows === 1;
    } catch (e) {
        console.error('delete project personal error', e.message);
    }
}

module.exports = {
    getAllProjectsPersonal,
    getProjectPersonal,
    updateProjectPersonal,
    deleteProjectPersonal,
    insertProjectPersonal,
}