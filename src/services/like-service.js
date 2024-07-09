const {TweetRepository,LikeRepository}=require("../repository/index")

class LikeService{
    constructor(){
        this.tweetRepository=new TweetRepository();
        this.likeRepository=new LikeRepository();
    }

    async toggleLike(modelId,modelType,userId){
        //will get modelType & modelId in url query and userId in req. body
        //api/v1/likes/toggle?id=modelId&type=tweet
        if(modelType=="Tweet")  //want to like the tweet
        {
            //1st get the tweet
            var likeTweet=await this.tweetRepository.find(modelId);
        }else if(modelType=="Comment"){   //want to like comment
            //here we've to get comment from comment model
        }else{
            throw new Error("Unknown model type");
        }

        //now see in like model if user has already liked this particular modelType & modelId
        const exists=await this.likeRepository.findByUserAndLike({
            user:userId,
            modelId:modelId,
            modelName:modelType
        })

        if(exists){
            //means already liked so need to remove the like
            //from both like model & tweet model
            likeTweet.likes.pull(exists.id);
            await likeTweet.save();
            //also remove from like model
            await exists.deleteOne();
            var isAdded=false;
        }else{
            //not already liked so need to create the like
            //in both like model & tweet model
            const like=await this.likeRepository.create({
                user:userId,
                modelId:modelId,
                modelName:modelType
            })
            //also push this in tweet model likes array
            likeTweet.likes.push(like);
            await likeTweet.save();
            var isAdded=true;
        }

        return isAdded;
    }
}

module.exports= LikeService;