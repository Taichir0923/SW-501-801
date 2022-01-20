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

    login(req, res){
        const {email , password} = req.body;
        User.findOne({email: email})
            .then(user => {
                if(!user){
                    return res.json({
                        message: 'Хэрэглэгчийн нэр эсвэл нууц үг буруу байна'
                    })
                }
                bcrypt.compare(password , user.password)
                    .then(isMathed => {
                        if(!isMathed){
                            return res.json({
                                message: 'Хэрэглэгчийн нэр эсвэл нууц үг буруу байна'
                            })
                        }

                        res.json({
                            message: 'Амжилттай нэвтэрлээ',
                            payload: user
                        })
                    })
            })
    }
}

module.exports = new UserController();