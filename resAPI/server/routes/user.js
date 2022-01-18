const express = require('express');
const route = express.Router();
const users = require('../controllers/user');

route.post('/register' , users.register);

module.exports = route;