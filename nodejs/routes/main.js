const express = require('express');
const User = require('../model/user');
const fs = require('fs')

const route = express.Router();
const mainController = require('../controllers/main');

route.get('/' , mainController.homeController);

route.get('/user/:id' , mainController.userController);

route.get('/form' , (req , res) => {
    res.render('form')
})

route.post('/getUserData' , (req , res) => {
    const {username , email , password} = req.body;
    const user = new User(username , email , password);
    user.save(email);
    res.redirect('/form')
})

route.get('/edit/:id' , (req,res) => {
    const userId = req.params.id;
    const user = User.findById(userId);
    res.render('edit' , {
        userData: user
    })
})

module.exports = route;