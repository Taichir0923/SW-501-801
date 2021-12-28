const express = require('express');
const route = express.Router();

const authController = require('../controllers/auth');

route.get('/login' , authController.getLoginUser);
route.post('/login' , authController.postLoginUser);

module.exports = route