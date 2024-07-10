const {LikeService}=require("../services/index")

const likeService=new LikeService();

const toggleLike=async(req,res)=>{
    try{
        const response=await likeService.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(200).json({
            success:true,
            data:response,
            err:{},
            message:"Successfully toggled the like"
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            data:{},
            message:"Something went wrong",
            err:err
        })
    }
}


module.exports={
    toggleLike
}