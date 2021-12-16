'use strict';

const {getAllUsers, getUser, insertUser, deleteUser, updateUser, updateToken} = require("../models/userModel");
const {makeThumbnail} = require("../utils/resize");
const {removeFile, removeFiles} = require("../utils/removeFile");
const user_list_get = async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
};

const user_get = async (req, res) => {
    const user = await getUser(req.params.id)
    res.json(user);
};

const user_post = async (req, res) => {
    console.log('add user data ', req.body);
    console.log('profile pic ', req.file);
    try {
        if (req.file) {
            const thumb = await makeThumbnail(req.file.path, './thumbnails/user/', req.file.filename);
            console.log('added ' + await thumb);
        }
        const id = await insertUser(req.body, req.file);
        res.json( { message: `User added successfully ${id}` } );
    } catch (e) {
        console.log(e.message)
    }
}

const user_delete = async (req , res) => {
    req.body.userId = req.user.userId;
    try {
        const user = await getUser(req.user.userId);
        const removed = await removeFile('./uploads/user/', './thumbnails/user/', user.profilePic);
        console.log('profilePic removed: ' + removed);
    } catch (e) {
        console.error(e)
    }
    const id = await deleteUser(req.body);
    res.json(id);
}

const user_update = async (req, res) => {
    console.log('req.body', req.body);
    req.body.userId = req.user.userId;
    if (req.file) {
        const currentUserInfo = await getUser(req.user.userId);
        try {
            const removed = await removeFile('./uploads/user/', './thumbnails/user/', currentUserInfo.profilePic);
            console.log('file removed: ', removed);
        } catch (e) {
            console.error(e)
        }
        try {
            const thumb = await makeThumbnail(req.file.path, './thumbnails/user/', req.file.filename);
            const updated = await updateUser(req.body, req.file);
            if (thumb) {
                res.send(`User updated ${updated}`);            }
        } catch (e) {
            console.log(e.message)
        }
    }
    const updated = await updateUser(req.body, req.file)
    res.json(updated);
}

const checkToken = (req, res, next) => {
    if (!req.user) {
        next(new Error('token not valid'));
    } else {
        res.json({ user: req.user });
    }
};

const refreshToken = async (req, res) => {
    const user = await updateToken(req.user)
    res.json(user);
}

module.exports = {
    user_list_get,
    user_get,
    user_post,
    user_update,
    user_delete,
    checkToken,
    refreshToken,
}
