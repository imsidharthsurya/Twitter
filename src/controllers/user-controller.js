const {UserService}=require("../services/index")

const userService=new UserService();

const signup=async(req,res)=>{
    try{
        const user=await userService.signup({
            email:req.body.email,
            password:req.body.password,
            userName:req.body.userName
        })
        return res.status(201).json({
            success:true,
            data:user,
            message:"Successfully created the user",
            err:{}
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            data:{},
            message:"Unable to create the user",
            err:err
        })
    }
}

const login=async(req,res)=>{
    try{
        const user=await userService.getUserByEmail(req.body.email)
        if(!user){
            //ie. user not found
            return res.status(401).json({
                success:false,
                message:"User not found"
            })
        }
        //user found so compare the pwd using virtual function
        if(!user.comparePwd(req.body.password)){
            //ie. password not correct
            return res.status(401).json({
                success:false,
                message:"Incorrect password"
            })
        }
        //ie. user found and pwd also matched so create jwt & return 
        const token=user.genJwt()
        return res.status(200).json({
            success:true,
            data:token,
            message:"Login success",
            err:{}
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            data:{},
            message:"Unable to login",
            err:err
        })
    }
}

module.exports={
    signup,
    login
}