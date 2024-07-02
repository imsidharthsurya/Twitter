const mongoose=require("mongoose");

const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String
    }
},{timestamps:true})

//create model ie. collection similar to table with the following schema
const Tweet=mongoose.model('Tweet',tweetSchema);

module.exports=Tweet