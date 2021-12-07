const express = require('express');

const app = express();

app.get("/about" , (req, res) => {
    res.send('Bidnii tuhai')
})

app.get("/" , (req, res) => {
    res.send('Express response');
})

app.listen(3000, () => {
    console.log('server started at port 3000')
})