const express=require("express")

const connect=require("./config/database")
const Tweet=require("./models/tweet")
const app=express();

app.listen(3000,async()=>{
    console.log("server started on port 3000")
    await connect();
    console.log("mongodb connected")
    // const tweet=await Tweet.create({
    //     content:"My second Tweet",
    //     userEmail:"imsidharthsurya@gmail.com"
    // })

    //get all Tweets
    // const tweet=await Tweet.findById('6683b0cb0663ac2f5be6bb85');
    // tweet.userEmail='imahasid@gmail.com';
    // await tweet.save();
    // console.log(tweet)
})