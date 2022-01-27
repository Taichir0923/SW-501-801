const User = require('../model/user');
const mongoose = require('mongoose');
const type = mongoose.Types.ObjectId;

class Check {
    isAuthenticated(req , res , next){
        const userId = req.headers.userid;
        if(userId && type.isValid(userId)){
            User.findOne({_id: userId})
                .then(user => {
                    if(user){
                        req.user = user;
                        next();
                    } else {
                        res.json({
                            message: "aldaa garlaa"
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            res.json({
                message: 'Ta nevtreegui bna.'
            })
        }
    }
}

module.exports = new Check;