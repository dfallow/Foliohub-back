/*
* Module used for deleting unused pictures and thumbnails
*/

'use strict';
const fs = require('fs');

// this one removes both original and thumbnail of an uploaded picture
const removeFile = async (pathToDirUpload, pathToDirThumb, filename) => {
    try {
        fs.unlinkSync(pathToDirUpload + filename);
        fs.unlinkSync(pathToDirThumb + filename);
        return filename;
    } catch (e) {
        console.error(e)
    }
}

// this one iterates through all the filenames provided and deletes the originals
const removeFiles = async (pathToDirUpload, filenames) => {
    try {
        const files = [];
        filenames.forEach((name) => {
            fs.unlinkSync(pathToDirUpload + name);
            files.push(pathToDirUpload + name);
        })
        return files;
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    removeFile,
    removeFiles,
}