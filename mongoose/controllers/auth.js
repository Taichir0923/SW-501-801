const User = require('../models/users');
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
                if(user.password === password){
                    console.log('Amjilttai nevterlee');
                    res.redirect('/')
                } else {
                    console.log('email esvel nuuts ug buruu bna.')
                    res.redirect('/login')
                }
            }
        })
}