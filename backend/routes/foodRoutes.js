const express = require('express');
const foodRoute = express.Router();

foodRoute.get("/fooditems", async (req, res) => {
    try{
        console.log(global.food_items)
        res.send([global.food_items, global.food_cat]);
    }catch(err){
        console.log(err);
        res.send(err);
    }
    
})

module.exports = foodRoute