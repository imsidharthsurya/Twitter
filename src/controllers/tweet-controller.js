const TweetService=require("../services/tweet-service")

const tweetService=new TweetService();

const create=async (req,res)=>{
    //in req body we'll get tweet data to create tweet
    try{
        const tweet=await tweetService.create(req.body);
        res.status(201).json({
            data:tweet,
            success:true,
            message:"Tweet created successfully",
            err:{}
        })
    }catch(err){
        console.log("error in controller ",err)
        res.status(500).json({
            data:{},
            success:false,
            message:"Something went wrong",
            err:err
        })
    }
}

module.exports={
    create
}