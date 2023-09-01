const mongoose = require("mongoose");

const schema = mongoose.Schema;

const postchema = new schema({
    title:{type:"string",max:50},
    Text:{type:"string",required:true,min:3,max:200},
    date:{type:"string",required:true}
});


module.exports=mongoose.model("Posts",postchema);