'use strict';

const {
    getAllProjectsPersonal,
    insertProjectPersonal,
    deleteProjectPersonal,
    updateProjectPersonal,
    getProjectPersonal
} = require("../../models/projectSubModels/personalModel");

const project_list_get_personal = async (req, res) => {
    const projects = await getAllProjectsPersonal(req.user);
    console.log('all projects', projects);
    res.json(projects);
}

const project_get_personal = async (req, res) => {
    const project = await getProjectPersonal(req.params.id, req.user);
    res.json(project);
}

const project_post_personal = async (req, res) => {
    try {
        console.log('project post req.body', req.body);
        let logo;
        let images;
        let imagesString;

        if (req.files.logo) {
            logo = req.files.logo[0].filename;
        }

        if (req.files.images) {
            images = [];
            for (let file of req.files.images) {
                images.push(file.filename);
            }
            imagesString = images.toString();
        }
        req.body.author = req.user.userId;
        const id = await insertProjectPersonal(req.body, imagesString, logo);
        res.json({message: `Project added ${id}`})
    } catch (e) {
        console.error('project posting', e.message)
    }
}

const project_update_personal = async (req, res) => {
    try {
        let logo;
        let images;
        let imagesString;
        if (req.files.logo) {
            logo = req.files.logo[0].filename;
        }

        if (req.files.images) {
            images = [];
            for (let file of req.files.images) {
                images.push(file.filename);
            }
            imagesString = images.toString();
        }
        console.log('image string', imagesString)
        req.body.id = req.params.id;
        req.body.author = req.body.author || req.user.userId;
        const updated = await updateProjectPersonal(req.body, req.user, imagesString, logo);
        res.send(`project updated ${updated}`)
    } catch (e) {
        console.error('project updating', e.message)
    }
}

const project_delete_personal = async (req, res) => {
    req.body.id = req.params.id;
    const projectDeleted = await deleteProjectPersonal(req.body, req.user);
    res.json({message: 'project deleted successfully ' + projectDeleted});
}


module.exports = {
    project_list_get_personal,
    project_post_personal,
    project_get_personal,
    project_delete_personal,
    project_update_personal,
}