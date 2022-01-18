const User = require('../model/user');
const bcrypt = require('bcryptjs');
class UserController {
    register(req, res){
        const {username , password , email} = req.body;
        User.findOne({email: email})
            .then(user => {
                if(user){
                    res.json({
                        message: "Email burtgeltei bna."
                    })
                } else {
                    bcrypt.hash(password , 12)
                        .then(hashedPass => {
                            const newUser = new User({
                                username: username,
                                password: hashedPass,
                                email: email
                            })

                            newUser.save()
                                .then(result => {
                                    res.json({
                                        message: 'Amjilttai burtgegdlee',
                                        result: result
                                    })
                                })
                        })
                }
            })
    }
}

module.exports = new UserController();