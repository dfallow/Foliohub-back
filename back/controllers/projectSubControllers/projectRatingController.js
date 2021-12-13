'use strict';

const {
    getProjectRating,
    insertProjectRating,
    updateProjectRating
} = require("../../models/projectSubModels/projectRatingModel");

const project_rating_get = async (req, res) => {
    const rating = await getProjectRating(req.params.projectId);
    console.log('project rating', rating);
    res.json(rating);
}

const project_rating_post = async (req, res) => {
    try {
        req.body.projectId = req.params.projectId
        console.log('rating post req.body', req.body);
        const rating = await insertProjectRating(req.body);
        res.json({message: `Rating added ${rating}`});
    } catch (e) {
        console.error('rating posting', e.message);
    }
}

const project_rating_update = async (req, res) => {
    try {
        req.body.projectId = req.params.projectId;
        console.log('req.body', req.body);
        const updated = await updateProjectRating(req.body);
        res.send(`project rating updated ${updated}`);
    } catch (e) {
        console.error('project rating updating', e.message);
    }
}

module.exports = {
    project_rating_get,
    project_rating_post,
    project_rating_update,
}