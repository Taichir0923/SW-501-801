const express = require('express');

const app = express();
const mainRoute = require('./routes/main');

app.set('view engine' , 'ejs');
app.set('views' , 'pages');

app.get("/about" , (req, res) => {
    res.send('Bidnii tuhai')
})

app.use(mainRoute);

app.listen(3000, () => {
    console.log('server started at port 3000')
})

// index.html file
// index.ejs , pug

// 3 route uusgej ejs butsaa...