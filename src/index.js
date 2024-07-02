const express=require("express")

const connect=require("./config/database")
// const Tweet=require("./models/tweet")
const app=express();

const TweetRepository=require("./repository/tweet-repository")
const Comment=require("./models/comment")
app.listen(3000,async()=>{
    console.log("server started on port 3000")
    await connect();
    console.log("mongodb connected")
    const tweetRepo=new TweetRepository();

    //creating tweet
    // const tweet=await tweetRepo.create({
    //     content:"My fifth tweet"
    // })
    // console.log(tweet)
   
    //getting a tweet
    // const tweet=await tweetRepo.get('6683d61f957f5fc348e33258');
    // console.log(tweet)

    //deleting a tweet
    // const tweet=await tweetRepo.delete('6683d61f957f5fc348e33258');
    // console.log(tweet);

    // updating a tweet
    // const tweet=await tweetRepo.update('6683d60ed2c4c84ca236bae2',{
    //     content:"this is fifth tweet updated for the last time"
    // })
    // console.log(tweet)

    // const tweet=await tweetRepo.create({
    //     content:"My Best and most popular tweet"
    // })
    // console.log("tweet before comment: ",tweet);
    // tweet.comments.push({content:"1st comment nice tweet"});
    // tweet.comments.push({content:"2nd comment wow nice reach"});
    // await tweet.save();
    // console.log("tweet after comment: ",tweet);
    // const tweet=await tweetRepo.create({content:"viral tweet of 2018"});
    // const comment=await Comment.create({content:"viral tweet 1st comment"});
    // console.log("tweet before comment: ",tweet);
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log("tweet after comment: ",tweet);

    // const tweet=await tweetRepo.getWithComments("6683dc728de0686da7f1c780");
    // console.log(tweet)

    // const tweet=await tweetRepo.getAll(5,3);
    // console.log(tweet);
    // const tweet=await tweetRepo.get("6683d5f9b806e41892bacee4");
    // tweet.tweetdetails;
    const tweet=await tweetRepo.create({content:"trying middleware"});
    console.log(tweet);
})