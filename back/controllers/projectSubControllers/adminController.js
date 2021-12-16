'use strict';

const {getAllProjectsAdmin, deleteProjectAdmin, getProjectAdmin, insertProjectAdmin, updateProjectAdmin} = require("../../models/projectSubModels/adminModel");
const {removeFile, removeFiles} = require("../../utils/removeFile");
const {makeThumbnail} = require("../../utils/resize");

const project_list_get_admin = async (req, res) => {
    const projects = await getAllProjectsAdmin();
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
    try {
        let logo;
        let images;
        let imagesString;
        const project = await getProjectAdmin(req.params.id, req.user);
        if (req.files.logo) {
            const logoFile = req.files.logo[0];
            if (project.logo) {
                try {
                    const removed = await removeFile('./uploads/project/', './thumbnails/project/', project.logo);
                    console.log('removed logo: ' + removed);
                } catch (e) {
                    console.error(e)
                }
            }
            try {
                const thumb = await makeThumbnail(logoFile.path, './thumbnails/project/', logoFile.filename);
                if (thumb) {
                    console.log('logo thumbnail added');
                }
                logo = logoFile.filename;
            } catch (e) {
                console.error(e)
            }
        }
        if (req.files.images) {
            if (project.images) {
                try {
                    const removed = await removeFiles('./uploads/project/', project.images.split(','));
                    console.log('Number of files removed: ' + removed);
                } catch (e) {
                    console.error(e)
                }
            }
            try {
                const imageFiles = req.files.images;
                images = [];
                for (let file of imageFiles) {
                    images.push(file.filename);
                }
                imagesString = images.toString();
            } catch (e) {
                console.error(e);
            }
        }
        req.body.id = req.params.id;
        const updated = await updateProjectAdmin(req.body, imagesString, logo);
        res.send(`project updated ${updated}`)
    } catch (e) {
        console.error('project updating', e.message)
    }
}

module.exports = {
    project_list_get_admin,
    project_post_admin,
    project_get_admin,
    project_delete_admin,
    project_update_admin,
}
