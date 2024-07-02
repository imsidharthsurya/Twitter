const mongoose=require("mongoose");
const tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userEmail:{
        type:String
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{timestamps:true})

tweetSchema.virtual('tweetdetails').get(function(){
    console.log(`${this.content} done by ${this.userEmail} at time ${this.updatedAt}`);
})
//create model ie. collection similar to table with the following schema
const Tweet=mongoose.model('Tweet',tweetSchema);

module.exports=Tweet