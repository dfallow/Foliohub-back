/*
* Module used for creating image thumbnails
*/

'use strict';
const sharp = require('sharp');

const makeThumbnail = async (file, uploadDir, thumbname) => {
    await sharp(file)
        .resize(250, 250)
        .toFile(uploadDir + thumbname);
};

module.exports = {
    makeThumbnail,
};