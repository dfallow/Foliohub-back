/*
* Controller for admins to manage users. Admin can do anything to existing accounts, except for changing
* their email or password.
*/

'use strict';

const {getAllUsersAdmin, getUserAdmin, deleteUserAdmin, updateUserAdmin} = require("../models/userAdminModel");
const {removeFile} = require("../utils/removeFile");
const {makeThumbnail} = require("../utils/resize");

const user_get_admin = async (req, res) => {
    const user = await getUserAdmin(req.params.id)
    res.json(user);
};

const user_list_get_admin = async (req, res) => {
    const user = await getAllUsersAdmin(req.params.id)
    res.json(user);
};

const user_delete_admin = async (req , res) => {
    req.body.userId = req.params.id;
    try {
        const user = await getUserAdmin(req.params.id);
        const removed = await removeFile('./uploads/user/', './thumbnails/user/', user.profilePic);
        console.log('profilePic removed: ' + removed);
    } catch (e) {
        console.error(e)
    }
    const id = await deleteUserAdmin(req.body);
    res.json(id);
}

const user_update_admin = async (req, res) => {
    console.log('req.body', req.body);
    req.body.userId = req.params.id;
    if (req.file) {
        const currentUserInfo = await getUserAdmin(req.params.id);
        try {
            const removed = await removeFile('./uploads/user/', './thumbnails/user/', currentUserInfo.profilePic);
            console.log('file removed: ', removed);
        } catch (e) {
            console.error(e)
        }
        try {
            const thumb = await makeThumbnail(req.file.path, './thumbnails/user/', req.file.filename);
            const updated = await updateUserAdmin(req.body, req.file);
            if (thumb) {
                res.send(`User updated ${updated}`);            }
        } catch (e) {
            console.log(e.message)
        }
    }
    const updated = await updateUserAdmin(req.body, req.file)
    res.json(updated);
}

module.exports = {
    user_get_admin,
    user_list_get_admin,
    user_delete_admin,
    user_update_admin,
}
