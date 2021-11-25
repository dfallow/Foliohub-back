'use strict';

const projectModel = require("../models/projectModel");
const {getAllProjects, getProject} = require("../models/projectModel");

// const projects = projectModel.projects;

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

const project_post = (req, res) => {

}

module.exports = {
    project_list_get,
    project_post,
    project_get,
}

