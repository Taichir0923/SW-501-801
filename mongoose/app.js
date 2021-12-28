require('dotenv').config();
const express = require('express');
const path = require('path')
const app = express();
const bp = require('body-parser');
const mongoose = require('mongoose');

// routes
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

app.set('view engine' , 'ejs');
app.set('views' , 'pages');

app.use(bp.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname , 'public')));

app.use(homeRouter);
app.use(userRouter);
app.use(authRouter);


mongoose.connect(process.env.MONGOOSE_PATH)
    .then(() => {
        app.listen(process.env.port , () => {
            console.log(process.env.port + ' port deer server aslaa')
        })
    })
    .catch((err) => {
        console.log(err)
    })