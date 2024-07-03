const express=require("express")

const connect=require("./config/database")

const TweetService=require("./services/tweet-service")

const app=express();

app.listen(3000,async()=>{
    console.log("server started on port 3000")
    await connect();
    console.log("mongodb connected")

    const tweetService=new TweetService();
    const tweet=await tweetService.create({
        content:"this is my feeling awesome tweet India won.  but i lost in life. #breakup #IndVsPak #HoneySingh #AwesomeFeeling #HappyCoding"
    })

    
})