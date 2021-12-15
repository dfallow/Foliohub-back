'use strict';


const {getAllProjectsAdmin, deleteProjectAdmin, getProjectAdmin, insertProjectAdmin, updateProjectAdmin} = require("../../models/projectSubModels/adminModel");

const project_list_get_admin = async (req, res) => {
    const projects = await getAllProjectsAdmin();
    console.log('projects admin', projects);
    res.json(projects);
}

const project_get_admin = async (req, res) => {
    const project = await getProjectAdmin(req.params.id);
    res.json(project);
}

const project_post_admin = async (req, res) => {
    try {
        console.log('project post req.body', req.body);
        req.body.author = req.user.userId;
        const id = await insertProjectAdmin(req.body);
        res.json({message: `Project added with id ${id}`})
    } catch (e) {
        console.error('project posting', e.message);
    }
}

const project_delete_admin = async (req, res) => {
    req.body.id = req.params.id;
    const projectDeleted = await deleteProjectAdmin(req.body);
    res.json({message: 'project deleted successfully ' + projectDeleted});
}
const project_update_admin = async (req, res) => {
    req.body.id = req.params.id;
    const updated = await updateProjectAdmin(req.body);
    res.send(`project updated ${updated}`);
}

module.exports = {
    project_list_get_admin,
    project_post_admin,
    project_get_admin,
    project_delete_admin,
    project_update_admin,
}
