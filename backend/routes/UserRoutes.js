const express = require('express');
const route = express.Router();
const User = require('../models/User');


route.post("/createuser", async (req, res) => {
    try{
        const user = new User({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: req.body.password
        })
        await user.save();
        console.log(`user created successfully: ${user}`);
        res.json({status: "Success", user: user});

    }catch(err){
        console.log(err);
    }
    
})

module.exports = route

