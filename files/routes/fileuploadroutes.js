'use strict';

const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload, multipleFileUpload, getallSinglefiles, getallMultiplefiles} = require('../controllers/fileuplodcontroller');
const router = express.Router();

router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSinglefiles);
router.get('/getMultipleFile', getallMultiplefiles);

module.exports = {
    routes: router
}