'use strict'

const pool = require('../../database/db');
const promisePool = pool.promise();

const getProjectRating = async (projectId) => {
    try {
        const sql = `SELECT SUM(rating) AS rating FROM gives_rating_to_project WHERE projectId = ?`;
        const [rows] = await promisePool.query(sql, [projectId]);
        console.log('getProjectRating', rows[0]);
        return rows[0];
    } catch (e) {
        console.error('getProjectRating query error: ', e.message);
    }
}

const getOwnRating = async (projectId, user) => {
    try{
        const sql = 'SELECT rating FROM gives_rating_to_project WHERE projectId = ? AND userId = ?';
        const params = [projectId, user.userId];
        const [rows] = await promisePool.query(sql, params);
        return rows[0];
    }catch (e) {
        console.log('getting own rating query', e.message);
    }
}

const insertProjectRating = async (rating) => {
    try {
        const sql = 'INSERT INTO gives_rating_to_project(userId, projectId, rating) VALUES (?, ?, ?)';
        const params = [rating.userId , rating.projectId, rating.rating || 0];
        const [rows] = await promisePool.query(sql, params);
        console.log('insert project rating', rows[0]);
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('insert project rating query', e.message);
    }
}

const updateProjectRating = async (rating, user) => {
    try {
        const sql = 'UPDATE gives_rating_to_project SET rating = ? WHERE userId = ? AND projectID = ?';
        const params = [rating.rating || 0, user.userId, rating.projectId];
        const [rows] = await promisePool.query(sql, params);
        console.log('update project rating', rows[0]);
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('update project rating error', e.message);
    }
}

module.exports = {
    getProjectRating,
    insertProjectRating,
    updateProjectRating,
    getOwnRating,
}