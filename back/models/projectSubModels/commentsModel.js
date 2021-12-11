'use strict';

const pool = require('../../database/db');
const promisePool = pool.promise();

const getAllProjectComments = async (projectId) => {
    try {
        const sql = 'SELECT * FROM writes_about WHERE projectId = ? ORDER BY timestamp DESC';
        const [rows] = await promisePool.query(sql, [projectId]);
        console.log('getALlProjectComments: ', rows);
        return rows;
    } catch (e) {
        console.error('getAllProjectComments query error: ', e.message);
    }
}

const insertProjectComment = async (comment) => {
    try {
        const query = 'INSERT INTO writes_about(userId, projectId, comment, timeStamp) VALUES (?, ?, ?, ?)';
        const params = [comment.userId, comment.projectId, comment.comment, comment.timeStamp];
        const [rows] = await promisePool.query(query, params);
        console.log('insert project comment', rows);
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('insert project comment query', e.message);
    }
}

const deleteProjectComment = async (comment, user) => {
    try {
        let sql = 'DELETE FROM writes_about WHERE commentId = ? AND userId = ? AND projectId = ?';
        let params = [comment.commentId, user.userId, comment.projectId];
        const [row] = await promisePool.query(sql, params);
        console.log('delete project comment', params);
        return row.affectedRows === 1;
    } catch (e) {
        console.error('delete project comment error', e.message);
    }
}

module.exports = {
    getAllProjectComments,
    insertProjectComment,
    deleteProjectComment,
}