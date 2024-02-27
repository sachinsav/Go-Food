const mongoose = require("mongoose");
const secret = require("./secret");

const mongoURI = secret.mongoURI;

async function db(){
    try {
        await mongoose.connect(mongoURI);
        console.log("connected to database successfully");
        const food_items_collection = mongoose.connection.db.collection("food_items")
        const fetched_data = await food_items_collection.find({}).toArray();
        // fetched_data.forEach(val => console.log(val))

      } catch (er) {
        console.log(er);
      }
}

module.exports = db()
