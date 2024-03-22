const mongoose = require("mongoose");

const givenSchema = new mongoose.Schema({
        roll:Number,
        session:String,
        bookType:String,
        bookNumber:Number,
        time:String,
        date:String
});

module.exports = mongoose.model("give",givenSchema);