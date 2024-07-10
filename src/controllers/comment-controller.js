const {CommentService}=require("../services/index");

const commentService=new CommentService();

const create=async(req,res)=>{
    try{
        const response=await commentService.create(req.query.modelId,req.query.modelName,req.body.userId,req.body.content);
        return res.status(201).json({
            success:true,
            data:response,
            message:"Successfully created the comment",
            err:{}
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
    create
}