const User = require('../models/users');
const bcrypt = require('bcryptjs');
exports.getLoginUser = (req, res) => {
    res.render('login' , {
        pageTitle: 'Login'
    })
}

exports.postLoginUser = (req, res) => {
    const {email , password} = req.body;
    User.findOne({email: email})
        .then(user => {
            if(!user){
                console.log('email esvel nuuts ug buruu bna.')
                res.redirect('/login')
            } else {
                bcrypt.compare(password , user.password)
                    .then(matched => {
                        if(matched){
                            console.log('Amjilttai nevterlee');
                            res.redirect('/user/' + user._id);
                        } else {
                            console.log('email esvel nuuts ug buruu bna.')
                            res.redirect('/login')
                        }
                    })
            }
        })
}