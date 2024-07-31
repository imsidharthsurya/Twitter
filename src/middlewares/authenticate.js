const passport=require("passport")

const authenticate=(req,res,next)=>{
    //after authenticating using jwt strategy we'll get user here
    passport.authenticate('jwt',(err,user)=>{
        if(err)next(err);
        if(!user){
            return res.status(401).json({
                message:"Unauthorised access"
            })
        }
        //user found so that while creating comment/tweet
        //rather than getting userId from req body
        //we'll now extract it from jwt token & will get it from
        //req.user.id
        req.user=user
        next();
    })(req,res,next);
}

module.exports={
    authenticate
}