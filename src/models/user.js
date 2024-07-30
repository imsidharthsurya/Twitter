const mongoose=require("mongoose");
const bcrypt=require("bcrypt")

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    }
},{timestamps:true});

userSchema.pre('save',function(next){
    const user=this;
    const saltRounds=10
    const hash = bcrypt.hashSync(user.password, saltRounds);
    user.password=hash
    next()
})

const User=mongoose.model("User",userSchema);
module.exports= User;