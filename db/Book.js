const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookType:String,
    bookName:{
        type:String
    },
    quantity:Number,
   
    pages:Number,
    auther:String,
    sem:String,
    price:Number
    
});

module.exports = mongoose.model("books",bookSchema);