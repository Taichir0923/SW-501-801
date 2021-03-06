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
    user.save();
    res.redirect('/form')
})

route.get('/edit/:id' , (req,res) => {
    const userId = req.params.id;
    const user = User.findById(userId);
    res.render('edit' , {
        userData: user
    })
})

route.post('/edit/:id' , (req, res) => {
    const userId = req.params.id;
    const {username , email , password} = req.body;
    // const 
    const user = new User(username , email , password);
    user.save(userId)
    res.redirect('/edit/' + userId)
})

route.post('/deleteUser/:id' , (req, res) => {
    const userId = req.params.id;
    User.findByIdAndDelete(userId);
    res.redirect('/')
})

module.exports = route;