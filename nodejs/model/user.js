const fs = require('fs');
class User {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
        this.id = Math.random().toString().split('.')[1]
    }

    save(id){
        let users;
        if(fs.existsSync(`${__dirname}/../data/users.json`)){
            const userlist = fs.readFileSync(`${__dirname}/../data/users.json` , 'utf-8')
            users = [...JSON.parse(userlist)]
        } else {
            users = []
        }

        const updateUser = users.find(usr => usr.id === id);
        if(updateUser){
            const updateUsers = [...users];
            const updateUserIndex = updateUsers.findIndex(usr => usr.id === id);
            updateUsers[updateUserIndex].username = this.username;
            updateUsers[updateUserIndex].email = this.email;
            updateUsers[updateUserIndex].password = this.password;
            users = updateUsers;
            fs.writeFile(`${__dirname}/../data/users.json` , JSON.stringify(users) , (err) => {
                if(!err){
                    console.log('хэрэглэгч update хийгдлээ...')
                } else {
                    console.log(err)
                }
            })
        } else {
            const existingUser = users.find(usr => usr.email === this.email);
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