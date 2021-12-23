const express = require('express');
const route = express.Router();
const homepage = require('../controllers/home');

route.get('/' , homepage.main)
route.get('/about' , homepage.about)

module.exports = route