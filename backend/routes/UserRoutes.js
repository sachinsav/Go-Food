const express = require('express');
const route = express.Router();
const User = require('../models/User');
const {body, validationResult} = require('express-validator');

route.post("/createuser", [
    body('name').isLength({min:3}),
    body('email').isEmail(),
    body('password','password length is too short').isLength({min: 5})
], async (req, res) => {
    try{
        const user = new User({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: req.body.password
        })
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({error: errors.array() });
        }
        await user.save();
        console.log(`user created successfully: ${user}`);
        res.json({status: "success", user: user});

    }catch(err){
        console.log(err);
    }
    
})

module.exports = route

