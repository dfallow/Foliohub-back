'use strict';
const fs = require('fs');

const removeFile = async (pathToDirUpload, pathToDirThumb, filename) => {
    try {
        fs.unlinkSync(pathToDirUpload + filename);
        fs.unlinkSync(pathToDirThumb + filename);
        return filename;
    } catch (e) {
        console.error(e)
    }
}

const removeFiles = async (pathToDirUpload, pathToDirThumb, filenames) => {
    try {
        filenames.forEach((name) => {
            fs.unlinkSync(pathToDirUpload + name);
            fs.unlinkSync(pathToDirThumb + name);
        })
        return filenames;
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    removeFile,
    removeFiles,
}