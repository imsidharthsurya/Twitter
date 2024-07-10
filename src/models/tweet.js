const mongoose=require("mongoose");
const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        max:[250,'Tweet cannot be more than 250 characters']
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }
    ],
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
},{timestamps:true})


//create model ie. collection similar to table with the following schema
const Tweet=mongoose.model('Tweet',tweetSchema);

module.exports=Tweet