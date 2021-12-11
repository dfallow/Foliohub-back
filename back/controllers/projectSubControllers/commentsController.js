'use strict';

const {
    getAllProjectComments, insertProjectComment, deleteProjectComment,
} = require("../../models/projectSubModels/commentsModel")

const comment_list_get = async (req, res) => {
    console.log(req);
    const comments = await getAllProjectComments(req.params.id);
    console.log('all project comments', comments);
    res.json(comments);
}

const project_post_comment = async (req, res) => {
    try {
        console.log('comment post req.body', req.body);
        const commentId = await insertProjectComment(req.body);
        res.json({message: `Comment added with id ${commentId}`});
    } catch (e) {
        console.error('comment posting', e.message);
    }
}

const project_delete_comment = async (req, res) => {
    req.body.commentId = req.params.id;
    console.log(req.user);
    const commentDeleted = await deleteProjectComment(req.body, req.user);
    res.json({message: 'project comment deleted successfully' + commentDeleted});
}

module.exports = {
    comment_list_get,
    project_post_comment,
    project_delete_comment,
}