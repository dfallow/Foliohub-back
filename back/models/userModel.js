'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
    try {
        const query = 'SELECT * FROM users'
        const [rows] = await promisePool.query(query);
        console.log('getAllUsers rows: ', rows)
        return rows;
    } catch (e) {
        console.error('getAllUsers query error: ', e.message);
    }
};

const getUser = async (userId) => {
    try {
        const query = 'SELECT * FROM users WHERE userId = ?'
        const [rows] = await promisePool.query(query, [userId]);
        return rows[0];
    } catch (e) {
        console.error('getUser query', e.message);
    }
};

const insertUser = async (user) => {
    try {
        const query = 'INSERT INTO users(username, email, title, creationDate, github, description, tags, profilePic) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
        const params = [user.username, user.email, user.title, user.creationDate, user.github, user.description, user.tags, user.profilePic];
        const [rows] = await promisePool.query(query, params);
        console.log('model insert User', rows);
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('model insert User', e.message);
    }
}

const updateUser = async (user) => {
    try {
        let sql = 'UPDATE users SET username = ?, email = ?, title = ?, creationDate = ?, github = ?, description = ?, tags = ?, profilePic = ? WHERE id = ?'
        let params = [user.username, user.email, user.title, user.creationDate, user.github, user.description, user.tags, user.profilePic, user.userId];
        const [rows] = await promisePool.query(sql, params);
        console.log('user updated', rows)
        return rows.affectedRows === 1;
    } catch (e) {
        console.error('error', e.message);
    }
}

const deleteUser = async (user) => {
    try {
        let sql = 'DELETE FROM users WHERE userId = ?';
        let params = [user.userId];
        const [row] = await promisePool.query(sql, params);
        return row.affectedRows === 1;
    } catch (e) {
        console.error('delete user error', e.message);
    }
}

module.exports = {
    getAllUsers,
    getUser,
    insertUser,
    updateUser,
    deleteUser,
}