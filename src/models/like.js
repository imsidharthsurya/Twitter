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
    likeableId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:"modelName"
    }

},{timestamps:true});


const Like=mongoose.model("Like",likeSchema);
export default Like;