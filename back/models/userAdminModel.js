'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsersAdmin = async () => {
    try {
        const query = 'SELECT * FROM users WHERE NOT role = 1'
        const [rows] = await promisePool.query(query);
        console.log('getAllUsers rows: ', rows)
        return rows;
    } catch (e) {
        console.error('getAllUsers query error: ', e.message);
    }
};

const getUserAdmin = async (userId) => {
    try {
        const query = 'SELECT userId, username, email, title, creationDate, github, description, tags, profilePic, role FROM users WHERE userId = ? AND NOT role = 1'
        const [rows] = await promisePool.query(query, [userId]);
        return rows[0];
    } catch (e) {
        console.error('getUser query', e.message);
    }
};

const updateUserAdmin = async (user, file) => {
    try {
        let sql;
        let params;
        if (!file) {
            sql = 'UPDATE users SET username = ?, title = ?, github = ?, description = ?, tags = ? WHERE userId = ? AND NOT role = 1'
            params = [user.username, user.title, user.github, user.description, user.tags, user.userId];
        } else {
            sql = 'UPDATE users SET username = ?, title = ?, github = ?, description = ?, tags = ?, profilePic = ? WHERE userId = ? AND NOT role = 1'
            params = [user.username, user.title, user.github, user.description, user.tags, file.filename, user.userId];
        }
        const [rows] = await promisePool.query(sql, params);
        const userInfo = await getUserAdmin(user.userId);
        console.log('user updated', rows);
        return {"message": "User updated with id: " + JSON.stringify(userInfo.userId)};
    } catch (e) {
        console.error('error', e.message);
    }
}

const deleteUserAdmin = async (user) => {
    try {
        const [row] = await promisePool.query('DELETE FROM users WHERE userId = ? AND NOT role = 1', [user.userId]);
        console.log('user deleted by admin', row)
        return {message: 'user deleted'}
    }catch (e) {
        console.error('Delete user admin fail', e.message)
    }
}

module.exports = {
    updateUserAdmin,
    deleteUserAdmin,
    getUserAdmin,
    getAllUsersAdmin,

}