'use strict'

const pool = require('../../database/db');
const promisePool = pool.promise();

const getProjectRating = async (projectId) => {
    try {
        const sql = `SELECT SUM(rating) FROM gives_rating_to_project WHERE projectId = ?`;
        const [rows] = await promisePool.query(sql, [projectId]);
        console.log('getProjectRating', rows);
        return rows;
    } catch (e) {
        console.error('getProjectRating query error: ', e.message);
    }
}

const insertProjectRating = async (rating) => {
    try {
        const sql = 'INSERT INTO gives_rating_to_project(userId, projectId, rating) VALUES (?, ?, ?)';
        const params = [rating.userId, rating.projectId, rating.rating];
        const [rows] = await promisePool.query(sql, params);
        console.log('insert project rating', rows);
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('insert project rating query', e.message);
    }
}

const updateProjectRating = async (rating) => {
    try {
        const sql = 'UPDATE gives_rating_to_project SET rating = ? WHERE userId = ? AND projectID = ?';
        const params = [rating.rating, rating.userId, rating.projectId];
        const [rows] = await promisePool.query(sql, params);
        console.log('update project rating', rows);
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('update project rating error', e.message);
    }
}

module.exports = {
    getProjectRating,
    insertProjectRating,
    updateProjectRating,
}