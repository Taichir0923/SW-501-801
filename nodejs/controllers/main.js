const fs = require("fs");
class Main {
    homeController(req, res){
        fs.readFile(`${__dirname}/../data/users.json` , 'utf-8' , (err , data) => {
            // console.log(data)
            res.render('index' , {
                message: "A message from the server",
                pageTitle: "Нүүр хуудас",
                users: JSON.parse(data)
            });
        });
    }
}

module.exports = new Main();