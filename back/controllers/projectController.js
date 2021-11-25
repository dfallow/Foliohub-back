'use strict';

const projectModel = require("../models/projectModel");

const projects = projectModel.projects;
const project_list_get = (req, res) => {
    res.json(projects);
}

module.exports = {
    project_list_get
}

