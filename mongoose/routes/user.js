const express = require('express')
const route = express.Router()
const userController = require('../controllers/user');

route.get('/newuser' , userController.register);
route.post('/register' , userController.newUser);
route.get('/user/:id' , userController.userPage)

module.exports = route;