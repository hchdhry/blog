const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userschema = new schema({
    username:{type:"string",max:30},
    password:{type:"string",max:30},
   
});


module.exports=mongoose.model("User",userschema);