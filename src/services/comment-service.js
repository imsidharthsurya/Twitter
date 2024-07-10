const {CommentRepository,TweetRepository}=require("../repository/index");

class CommentService{
    constructor(){
        this.commentRepository=new CommentRepository();
        this.tweetRepository=new TweetRepository();
    }

    async create(modelId,modelName,userId,content){
        try{
            //1st check on which model we're trying to make comment
            //and grab that object from that model
            if(modelName=="Tweet"){
                //means trying to comment on a tweet so grab that tweet with modelId
                var commentable=await this.tweetRepository.get(modelId);
            }
            else if(modelName=="Comment"){
                console.log("inside comment add comment")
                //means trying to comment on a comment so grab that comment with modelId
                var commentable=await this.commentRepository.get(modelId);
                console.log("in comment add comment ",commentable)
            }else{
                throw new Error("Unknown model type");
            }

            //now create a comment and also add that comment on the model
            //on which we're commenting
            const comment=await this.commentRepository.create({
                content:content,
                userId:userId,
                modelName:modelName,
                modelId:modelId,
                comments:[]
            })
            //now add this object into main tweet/comment on which we're commenting
            commentable.comments.push(comment);
            await commentable.save();
            return comment;
        }catch(err){
            console.log("error happenend in create comment service layer ",err);
            throw err;
        }
    }
}

module.exports=CommentService;