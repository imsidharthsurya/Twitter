const mongoose=require("mongoose");

const likeSchema=new mongoose.Schema({
    modelName:{
        type:String,
        required:true,
        enum:["Tweet","Comment"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    modelId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:"modelName"
    }

},{timestamps:true});


const Like=mongoose.model("Like",likeSchema);
module.exports= Like;