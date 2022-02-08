const User = require('../model/user');
const mongoose = require('mongoose');
const type = mongoose.Types.ObjectId;
const jwt = require('jsonwebtoken');
// "Bearer gjdksljgldfs/gjfklhjlkfgjs;dfngsjvfhklg;fsj"
class Check {
    isAuthenticated(req , res , next){
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token , process.env.privatekey);
        
        if(decoded){
            req.user = decoded.user;
            next();
        } else {
            res.json({
                message: 'Ta nevtreegui bna.'
            })
        }
    }
}

module.exports = new Check;