const {TweetRepository}=require("../repository/index");

class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
    }

    async create(data){
        const content=data.content;

        //1st extract hashtags from the tweet content
        const tags=content.match(/#[a-zA-Z0-9_]+/g);
        tags=tags.map((tag)=>{
            return tag.substring(1);
        })

        console.log("hashtags are: ",tags);
        //then create the tweet from the data
        const tweet=await this.tweetRepository.create(data);
        return tweet;
    }
}

module.exports=TweetService;