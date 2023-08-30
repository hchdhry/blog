const mongoose = require("mongoose");

const schema = mongoose.Schema;

const messageschema = new schema({
    name:{type:"string",max:30},
    password:{type:"string",max:30},
   
});


module.exports=mongoose.model("Messages",messageschema);