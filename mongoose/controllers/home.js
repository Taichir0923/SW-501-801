const User = require('../models/users');
exports.main = function(req, res){
    User.find()
        .then(users => {
            res.render('index' , {
                pageTitle: 'Nuur huudas',
                users: users
            })
        })
        .catch(err => console.log(err));
}

exports.about = function(req, res){
    res.send('about us')
}