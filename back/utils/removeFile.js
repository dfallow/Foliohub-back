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