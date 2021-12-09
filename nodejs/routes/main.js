const express = require('express');

const route = express.Router();
const mainController = require('../controllers/main');

route.get('/' , mainController.homeController);

route.get('/about' , (req, res) => {

})

module.exports = route;