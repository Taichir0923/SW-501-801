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
    let users;

    const userlist = fs.readFileSync(`${__dirname}/../data/users.json` , 'utf-8')

    if(!userlist){
        users = [];
    } else {
        users = [...JSON.parse(userlist)]
    }
    
    const user = new User(username , email , password);
    users.push(user);

    fs.writeFile(`${__dirname}/../data/users.json` , JSON.stringify(users) , (err) => {
        if(!err){
            console.log('хэрэглэгч үүслээ...')
        } else {
            console.log(err)
        }
    })

    res.redirect('/form')
})

module.exports = route;