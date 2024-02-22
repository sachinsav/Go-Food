const express = require('express')
const db = require('./db')
const app = express()
const port = 5000


app.get("/", (req, res) => {
    res.send("hello World");
});

app.listen(port, ()=>{
    console.log(`server is running on port  ${port}`)
})