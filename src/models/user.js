const mongoose=require("mongoose");
const bcrypt=require("bcrypt")
var jwt = require('jsonwebtoken');

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

//method to compare hashed pwd & given pwd
userSchema.methods.comparePwd=function(password){
    return bcrypt.compareSync(password, this.password);
}

//method to generate jwt from id & email
userSchema.methods.genJwt=function(){
    return jwt.sign({id:this._id,email:this.email},'twitter_backend',{
        expiresIn:"1h"
    })
}
const User=mongoose.model("User",userSchema);
module.exports= User;