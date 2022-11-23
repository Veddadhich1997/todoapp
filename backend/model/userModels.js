const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    task:{
        type:String,
        require:[true,"Please insert the task"],
    }
});

module.exports =mongoose.model("user",userSchema);