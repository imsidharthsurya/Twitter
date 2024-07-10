const express=require("express")

const connect=require("./config/database")
const ApiRoutes=require("./routes/index")

// const UserRepository=require("./repository/user-repository")

const app=express();

app.use(express.json());

app.use("/api",ApiRoutes)

app.listen(3000,async()=>{
    console.log("server started on port 3000")
    await connect();
    console.log("mongodb connected")

    /*
    * 1st: create a user
    * 2nd: get a tweet id
    * 3rd: create like/ undo like on that tweet
    */
    // const tweetRepository=new TweetRepository();
    // const userRepository=new UserRepository();
    

    // const user=await userRepository.create({
    //     email:"imahasid@gmail.com",
    //     password:"12345678",
    //     userName:"sid2op"
    // })
    // const users=await userRepository.getAll();
    // const tweets=await tweetRepository.getAll(10,0);
    // console.log("tweet are: ",tweets)
    //got the 1st 10 tweet now we want to like/ undo like on 1st tweet
    // const likeService=new LikeService();
    // await likeService.toggleLike(tweets[0].id,"Tweet",user.id);
    // await likeService.toggleLike(tweets[0].id,"Tweet",users[0].id);

})