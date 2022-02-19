const User = require('../model/user');
const mongoose = require('mongoose');
const type = mongoose.Types.ObjectId;
const jwt = require('jsonwebtoken');
// "Bearer gjdksljgldfs/gjfklhjlkfgjs;dfngsjvfhklg;fsj"
class Check {
    isAuthenticated(req , res , next){
        const token = req.headers.authorization.split(' ')[1];
        
        jwt.verify(token , process.env.privatekey , (err , decoded) => {
            if(!err){
                if(decoded){
                    req.user = decoded.user;
                    next();
                }
            } else {
                res.json({
                    errMessage: 'Session expired!'
                })
            }
        });
        
    }
}

module.exports = new Check;