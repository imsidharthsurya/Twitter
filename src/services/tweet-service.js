const {TweetRepository,HashtagRepository}=require("../repository/index");
// const Hashtag=require("../models/hashtag")



class TweetService{
    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();
    }

    async create(data){

        //1st create the tweet from the data
        const tweet=await this.tweetRepository.create(data);

        const content=data.content;

        //extract hashtags from the tweet content
        //convert all into lowercase as well
        let tags=content.match(/#[a-zA-Z0-9_]+/g);
        tags=tags.map((tag)=>{
            return tag.substring(1).toLowerCase();
        })

        console.log("hashtags which are present in the tweet: ",tags);

        /** from the list of hashtags
        *   find all the hashtags which already exist in hashtag collection
        **/
        let presentHashtag=await this.hashtagRepository.findByName(tags);

        //from array of object of hashtag to only hashtag title array
        let presentHashtagTitle=presentHashtag.map((tag)=>{
            return tag.title;
        })
        console.log("found hashtags are: ",presentHashtagTitle)

        //get only title of all the hashtags which are not present in collection
        //so that we can create it
        let newHashtag=tags.filter((tag)=>{
            return !presentHashtagTitle.includes(tag);
        })
        console.log("list of New hashtag that we need to create is: ",newHashtag);

        //format all those hashtags in correct format 
        //ie. of object
        newHashtag=newHashtag.map((tag)=>{
            return {
                title:tag,
                tweets:[tweet.id]
            }
        })
        console.log("New hashtag object that we will create is: ",newHashtag);

        //now bulk create those hashtags
        await this.hashtagRepository.bulkCreate(newHashtag);

        //after this in already existing hashtags
        //we can push tweet id no need for await here
        presentHashtag=presentHashtag.map((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
        })
        
        return tweet;
    }

    async getTweet(tweetId){
        try{
            const tweet=await this.tweetRepository.getWithComments(tweetId);
            return tweet;
        }catch(err){
            console.log("error happenend in get a tweet service layer ",err);
            throw err;
        }
    }
}

module.exports=TweetService;