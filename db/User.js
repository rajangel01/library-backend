const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:String,
    password:String,
    mobile:Number,
    dob:String,
    session:String,
    roll:Number
});

module.exports = mongoose.model("users",userSchema);