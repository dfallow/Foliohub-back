/*
* Controller to get all public users.
*/

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

module.exports = {
    project_list_get,
    project_get,
}