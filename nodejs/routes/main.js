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

    if(fs.existsSync(`${__dirname}/../data/users.json`)){
        const userlist = fs.readFileSync(`${__dirname}/../data/users.json` , 'utf-8')
        users = [...JSON.parse(userlist)]
    } else {
        users = []
    }

    const existingUser = users.find(usr => usr.email === email);

    if(!existingUser){
        const user = new User(username , email , password);
        users.push(user);
    
        fs.writeFile(`${__dirname}/../data/users.json` , JSON.stringify(users) , (err) => {
            if(!err){
                console.log('хэрэглэгч үүслээ...')
                res.redirect('/form')
            } else {
                console.log(err)
            }
        })
    } else {
        res.redirect('/form');
        console.log('Имэйл бүртгэлтэй байна...')
    }
})

module.exports = route;