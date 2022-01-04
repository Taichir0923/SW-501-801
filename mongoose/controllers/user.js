const User = require('../models/users');
const bcrypt = require('bcryptjs');
exports.register = function(req, res){
    res.render('register' , {
        pageTitle: 'Register'
    })
}

exports.newUser = function(req, res){
    const { username , email , avatar , password } = req.body;
    bcrypt.hash(password , 12)
        .then(hashedPassword => {
            const user = new User({
                username: username,
                email: email,
                avatar: avatar,
                password: hashedPassword
            })
            user.save()
                .then(result => {
                    console.log(result)
                    res.redirect('/newuser')
                })
                .catch(err => console.log(err))
        })
}

exports.userPage = (req, res) => {
    const userId = req.params.id;
    User.findById(userId)
        .then(user => {
            if(!user){
                res.redirect('/login');
            } else {
                res.render('profile' , {
                    pageTitle: user.username,
                    user: user
                })
            }
        })
}

exports.updateUser = (req, res) =>{
    const userId = req.params.id;
    User.findById(userId)
        .then(user => {
            res.render('update' , {
                pageTitle: 'Update user',
                user: user
            })
        })
}

exports.postUpdateUser = (req, res) => {
    const userId = req.params.id;
    const {username , email , password , avatar} = req.body;
    User.findById(userId)
        .then(user => {
            user.username = username;
            user.email = email;
            user.avatar = avatar;
            user.password = password;
    
            user.save()
                .then(result => {
                    console.log(result);
                    res.redirect('/')
                })
        })
}

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.findByIdAndRemove(userId)
        .then(user => {
            console.log(user);
            res.redirect('/')
        })
}