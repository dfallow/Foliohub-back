'use strict';


const {getAllProjects, getProject, deleteProject, insertProject, updateProject} = require("../models/projectModel");

const project_list_get = async (req, res) => {
    console.log('Req flash role: ', req.flash('role'));
    req.user.role = req.flash('role');
    const projects = await getAllProjects(req.user)
    console.log('all projects', projects);
    res.json(projects);
}

const project_get = async (req, res) => {
    const project = await getProject(req.params.id);
    res.json(project);
}

const project_post = async (req, res) => {
    try {
        console.log('project post req.body', req.body);
        req.body.author = req.user.userId;
        const id = await insertProject(req.body);
        res.json({message: `Project added with id ${id}`})
    } catch (e) {
        console.error('project posting', e.message)
    }
}

const project_delete = async (req, res) => {
    req.body.id = req.params.id;
    const projectDeleted = await deleteProject(req.body);
    res.json({message: 'project deleted successfully ' + projectDeleted});
}

const project_update = async (req, res) => {
    req.body.id = req.params.id;
    req.body.author = req.body.author || req.user.userId;
    const updated = await updateProject(req.body, req.user.role)
    res.send(`project updated ${updated}`)
}

module.exports = {
    project_list_get,
    project_post,
    project_get,
    project_delete,
    project_update,
}