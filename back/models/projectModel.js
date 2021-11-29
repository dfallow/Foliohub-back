'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllProjects = async (user) => {
    try {
        //roles: admin 1, logged 0, public null
        const publicQuery = 'SELECT * FROM projects WHERE private = 0';
        const adminQuery = 'SELECT * FROM projects';
        const userQuery = 'SELECT * FROM projects AS p INNER JOIN users AS u on p.author = u.userId'
        const testQuery = 'SELECT * FROM projects WHERE private = 0 OR author = ?'

        let params = [];

        let query = publicQuery;

        if (user.role === 1) {
            console.log('Get all as admin');
            query = adminQuery;
        }
        if (user.role === 0) {
            console.log('Get all as logged user');
            query = testQuery;
            params = [user.userId]
        }
        const [rows] = await promisePool.query(query, params);
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
        const query = 'INSERT INTO projects(name, date, description, video, images, outline, logo, tags, author, private) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
        const params = [project.name, project.date, project.description, project.video, project.images, project.outline, project.logo, project.tags, project.author, project.private];
        const [rows] = await promisePool.query(query, params);
        console.log('model insert Project', rows);
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('model insert Project', e.message);
    }
}

const updateProject = async (project) => {
    try {
        let sql = 'UPDATE projects SET name = ?, date = ?, description = ?, video = ?, images = ?, outline = ?, logo = ?, tags = ? WHERE id = ?'
        let params = [project.name, project.date, project.description, project.video, project.images, project.outline, project.logo, project.tags, project.id];
        const [rows] = await promisePool.query(sql, params);
        console.log('project updated', rows)
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('error', e.message);
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
    updateProject,
}