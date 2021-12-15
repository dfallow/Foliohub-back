'use strict';

const {
    getAllProjectsPersonal,
    insertProjectPersonal,
    deleteProjectPersonal,
    updateProjectPersonal,
    getProjectPersonal
} = require("../../models/projectSubModels/personalModel");
const {makeThumbnail} = require("../../utils/resize");
const {removeFile, removeFiles} = require("../../utils/removeFile");

const project_list_get_personal = async (req, res) => {
    const projects = await getAllProjectsPersonal(req.user);
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
            try {
                const logoFile = req.files.logo[0];
                const thumb = await makeThumbnail(logoFile.path, './thumbnails/project/', logoFile.filename);
                if (thumb) {
                    console.log('logo thumbnail added');
                }
                logo = logoFile.filename;
            } catch (e) {
                console.error(e);
            }
        }
        if (req.files.images) {
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
        const project = await getProjectPersonal(req.params.id, req.user);
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
        req.body.author = req.body.author || req.user.userId;
        const updated = await updateProjectPersonal(req.body, req.user, imagesString, logo);
        res.send(`project updated ${updated}`)
    } catch (e) {
        console.error('project updating', e.message)
    }
}

const project_delete_personal = async (req, res) => {
    req.body.id = req.params.id;
    const project = await getProjectPersonal(req.params.id, req.user);
    if (project.logo) {
        try {
            const removed = await removeFile('./uploads/project/', './thumbnails/project/', project.logo);
            console.log('removed logo: ' + removed);
        } catch (e) {
            console.error(e)
        }
    }
    if (project.images) {
        try {
            const removed = await removeFiles('./uploads/project/', project.images.split(','));
            console.log('Files removed: ' + removed);
        } catch (e) {
            console.error(e)
        }
    }
    try {
        const projectDeleted = await deleteProjectPersonal(req.body, req.user);
        res.json({message: 'project deleted successfully ' + projectDeleted});
    } catch (e) {
        console.error(e);
    }

}


module.exports = {
    project_list_get_personal,
    project_post_personal,
    project_get_personal,
    project_delete_personal,
    project_update_personal,
}