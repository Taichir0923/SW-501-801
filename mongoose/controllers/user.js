const User = require('../models/users');
exports.register = function(req, res){
    res.render('register' , {
        pageTitle: 'Register'
    })
}

exports.newUser = function(req, res){
    const { username , email , avatar , password } = req.body;
    const user = new User({
        username: username,
        email: email,
        avatar: avatar,
        password: password
    })
    user.save()
        .then(result => {
            console.log(result)
            res.redirect('/newuser')
        })
        .catch(err => console.log(err))
}