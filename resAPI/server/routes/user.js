const express = require('express');
const route = express.Router();
const users = require('../controllers/user');

route.post('/register' , users.register);
route.post('/login' , users.login);

module.exports = route;