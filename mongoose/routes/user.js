const express = require('express')
const route = express.Router()
const userController = require('../controllers/user');

route.get('/newuser' , userController.register);
route.post('/register' , userController.newUser);
route.get('/user/:id' , userController.userPage);

route.get('/user/update/:id' , userController.updateUser);
route.post('/user/update/:id' , userController.postUpdateUser);

route.post('/user/delete/:id' , userController.deleteUser);

module.exports = route;