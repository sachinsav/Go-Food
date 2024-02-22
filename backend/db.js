const mongoose = require('mongoose');
const secret = require('./secret');
const mongoURI = secret.mongoURI;
try{
mongoose.connect(mongoURI);
console.log("connected")

}catch(er){
    console.log(er)
}