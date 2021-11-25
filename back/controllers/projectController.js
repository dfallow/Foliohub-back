'use strict';


const {getAllProjects, getProject, deleteProject, insertProject} = require("../models/projectModel");

const project_list_get = async (req, res) => {
    const projects = await getAllProjects()
    if(projects.length > 0) {
        res.json(projects);
    } else {
        res.json({message: 'not getting all projects!'})
    }
}

const project_get = async (req, res) => {
    const project = await getProject(req.params.id);
    res.json(project);
}

const project_post = async (req, res) => {
    try {
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

