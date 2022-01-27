require('dotenv').config();
const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const usersRoute = require('./routes/user');
const animeRoute = require('./routes/anime');

app.use(cors());
app.use(bp.json())

app.use(usersRoute);
app.use(animeRoute);

app.get('/' , (req , res) => {
    res.json({
        message: "REST API test amjilttai ajillaa"
    })
})

mongoose.connect(process.env.MONGO_PATH)
    .then(() => {
        app.listen(process.env.port , () => {
            console.log(process.env.port)
        })
    })
    .catch(err => console.log(err))