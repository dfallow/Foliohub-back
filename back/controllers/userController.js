'use strict';

const {getAllUsers, getUser, insertUser, deleteUser, updateUser} = require("../models/userModel");
const user_list_get = async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
};

const user_get = async (req, res) => {
    const user = await getUser(req.params.id)
    res.json(user);
}

const user_post = async (req, res) => {
    console.log('add user data ', req.body);
    console.log('profile pic ', req.file);
    const id = await insertUser(req.body, req.file);
    res.send(id);
}

const user_delete = async (req , res) => {
    req.body.userId = req.user.userId;
    await deleteUser(req.body);
    res.send('User deleted');
}

const user_update = async (req, res) => {
    req.body.userId = req.user.userId;
    const updated = await updateUser(req.body)
    res.send(`User updated ${updated}`);
}

const checkToken = (req, res, next) => {
    if (!req.user) {
        next(new Error('token not valid'));
    } else {
        res.json({ user: req.user });
    }
};

module.exports = {
    user_list_get,
    user_get,
    user_post,
    user_update,
    user_delete,
    checkToken,
}
