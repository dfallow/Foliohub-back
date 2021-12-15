'use strict';


const {getAllProjects, getProject, insertProject} = require("../models/projectModel");

const project_list_get = async (req, res) => {
    const projects = await getAllProjects();
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

module.exports = {
    project_list_get,
    project_post,
    project_get,
}