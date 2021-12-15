'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
    try {
        const query = 'SELECT * FROM users WHERE NOT role = 1'
        const [rows] = await promisePool.query(query);
        console.log('getAllUsers rows: ', rows)
        return rows;
    } catch (e) {
        console.error('getAllUsers query error: ', e.message);
    }
};

const getUser = async (userId) => {
    try {
        const query = 'SELECT userId, username, email, title, creationDate, github, description, tags, profilePic, role FROM users WHERE userId = ? AND NOT role = 1'
        const [rows] = await promisePool.query(query, [userId]);
        return rows[0];
    } catch (e) {
        console.error('getUser query', e.message);
    }
};

const insertUser = async (user, file) => {
    try {
        let sql;
        let params;
        if (!file) {
            sql = 'INSERT INTO users(username, password, email, title, github, description, tags) VALUES (?, ?, ?, ?, ?, ?, ?)'
            params = [user.username, user.password, user.email, user.title, user.github, user.description, user.tags];
        } else {
            sql = 'INSERT INTO users(username, password, email, title, github, description, tags, profilePic) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
            params = [user.username, user.password, user.email, user.title, user.github, user.description, user.tags, file.filename];
        }
        const [rows] = await promisePool.query(sql, params);
        console.log('model insert User', rows);
        return {"message:": "User created with id: " + rows.insertId};
    } catch (e) {
        console.error('model insert User', e.message);
    }
}

const updateUser = async (user, file) => {
    try {
        let sql;
        let params;
        if (!file) {
            sql = 'UPDATE users SET username = ?, title = ?, github = ?, description = ?, tags = ? WHERE userId = ?'
            params = [user.username, user.title, user.github, user.description, user.tags, user.userId];
        } else {
            sql = 'UPDATE users SET username = ?, title = ?, github = ?, description = ?, tags = ?, profilePic = ? WHERE userId = ?'
            params = [user.username, user.title, user.github, user.description, user.tags, file.filename, user.userId];
        }
        const [rows] = await promisePool.query(sql, params);
        const userInfo = await getUser(user.userId);
        console.log('user updated', rows);
        return {"message": "User updated with id: " + JSON.stringify(userInfo.userId)};
    } catch (e) {
        console.error('error', e.message);
    }
}

const deleteUser = async (user) => {
    try {
        let sql = 'DELETE FROM users WHERE userId = ?';
        let params = [user.userId];
        const [row] = await promisePool.query(sql, params);
        console.log('user deleted: ', row);
        return {"message": "User deleted"};
    } catch (e) {
        console.error('delete user error', e.message);
    }
}

const getUserLogin = async (params) => {
    try {
        console.log(params);
        const [rows] = await promisePool.execute(
            'SELECT * FROM users WHERE email = ?;',
            params);
        return rows;
    } catch (e) {
        console.log('error', e.message);
    }
};

module.exports = {
    getAllUsers,
    getUser,
    insertUser,
    updateUser,
    deleteUser,
    getUserLogin,
}