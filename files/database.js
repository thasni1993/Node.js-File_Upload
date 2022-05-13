'use strict';
const mongoose = require('mongoose');

module.exports = () =>{
    mongoose.connect('mongodb://localhost/upload-files').then(() => console.log('Connected to mongodb......'));
}