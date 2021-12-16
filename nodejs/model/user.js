const fs = require('fs');
class User {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
        this.id = Math.random().toString().split('.')[1]
    }

    save(email){
        let users;
        if(fs.existsSync(`${__dirname}/../data/users.json`)){
            const userlist = fs.readFileSync(`${__dirname}/../data/users.json` , 'utf-8')
            users = [...JSON.parse(userlist)]
        } else {
            users = []
        }

        const existingUser = users.find(usr => usr.email === email);
        if(!existingUser){
            users.push(this);
        
            fs.writeFile(`${__dirname}/../data/users.json` , JSON.stringify(users) , (err) => {
                if(!err){
                    console.log('хэрэглэгч үүслээ...')
                } else {
                    console.log(err)
                }
            })
        } else {
            console.log('Имэйл бүртгэлтэй байна...')
        }
    } 
    
    static findById(id){
        let users;
        if(fs.existsSync(`${__dirname}/../data/users.json`)){
            const userlist = fs.readFileSync(`${__dirname}/../data/users.json` , 'utf-8')
            users = [...JSON.parse(userlist)]
        } else {
            users = []
        }

        const existingUser = users.find(usr => usr.id === id);
        return existingUser;
    }
}

// methodical
// prototypical

// Create , Read , Update , Delete

module.exports = User;