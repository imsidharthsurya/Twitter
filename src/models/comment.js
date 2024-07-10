const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    modelName:{
        type:String,
        required:true,
        enum:["Tweet","Comment"]
    },
    modelId:{
        type:mongoose.Schema.Types.ObjectId,
        refPath:"modelName",
        required:true
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
},{timestamps:true})

const Comment=mongoose.model("Comment",commentSchema);

module.exports=Comment