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

module.exports={
    signup
}