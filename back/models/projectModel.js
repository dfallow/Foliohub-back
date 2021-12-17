/*
* Model for getting public projects.
*/

'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

// this query return all public projects as well as their respective comment count and rating.
const getAllProjects = async () => {
    try {
        const query = `
                        SELECT 
                          p.*,
                          IFNULL(w.commentCount, 0) AS comments,
                          IFNULL(r.ratingSum, 0) AS rating
                        FROM projects AS p
                        LEFT JOIN (
                          SELECT projectId, COUNT(commentId) AS commentCount
                          FROM writes_about as w
                          GROUP BY projectId
                        ) w ON (p.id = w.projectId)
                        LEFT JOIN (
                          SELECT projectId, SUM(rating) AS ratingSum
                          FROM gives_rating_to_project AS r
                          GROUP BY projectId
                        ) r ON (p.id = r.projectId) 
                        WHERE p.private = 0
                        ORDER BY date DESC `;
        const [rows] = await promisePool.query(query);
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

module.exports = {
    getAllProjects,
    getProject,
}