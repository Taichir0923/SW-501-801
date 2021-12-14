class User {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
        this.id = Math.random().toString().split('.')[1]
    }
}

module.exports = User;