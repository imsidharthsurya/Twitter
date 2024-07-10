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

const getTweet=async(req,res)=>{
    try{
        const tweet=await tweetService.getTweet(req.params.id);
        return res.status(200).json({
            success:true,
            data:tweet,
            message:"successfully fetched the tweet",
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
    create,
    getTweet
}