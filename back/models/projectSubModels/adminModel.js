'use strict';

const pool = require('../../database/db');
const promisePool = pool.promise();

const getAllProjectsAdmin = async () => {
    try {
        const sql = 'SELECT * FROM projects'
        const [rows] = await promisePool.query(sql);
        console.log('getAllProjectsAdmin: ', rows)
        return rows;
    } catch (e) {
        console.error('getAllProjectsAdmin query error: ', e.message);
    }
};

const getProjectAdmin = async (projectId) => {
    try {
        const query = 'SELECT * FROM projects WHERE id = ?'
        const [rows] = await promisePool.query(query, [projectId]);
        console.log('getProjectAdmin: ', rows)
        return rows[0];
    } catch (e) {
        console.error('getProject admin query', e.message);
    }
};

const insertProjectAdmin = async (project) => {
    try {
        const query = 'INSERT INTO projects(name, date, description, video, images, outline, logo, tags, author, private) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        const params = [project.name, project.date, project.description, project.video, project.images, project.outline, project.logo, project.tags, project.author, project.private];
        const [rows] = await promisePool.query(query, params);
        console.log('insert project admin', rows);
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('insert project admin query', e.message);
    }
}

const updateProjectAdmin = async (project) => {
    try {
        let sql = 'UPDATE projects SET name = ?, date = ?, description = ?, video = ?, images = ?, outline = ?, logo = ?, tags = ?, private = ? WHERE id = ?'
        let params = [project.name, project.date, project.description, project.video, project.images, project.outline, project.logo, project.tags, project.private, project.id];
        const [rows] = await promisePool.query(sql, params);
        console.log('update project admin', rows)
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('update project admin error', e.message);
    }
}

const deleteProjectAdmin = async (project) => {
    try {
        let sql = 'DELETE FROM projects WHERE id = ?';
        let params = [project.id];
        const [row] = await promisePool.query(sql, params);
        console.log('delete project admin')
        return row.affectedRows === 1;
    } catch (e) {
        console.error('delete project admin error', e.message);
    }
}

module.exports = {
    getAllProjectsAdmin,
    getProjectAdmin,
    updateProjectAdmin,
    deleteProjectAdmin,
    insertProjectAdmin,
}