const express=require("express");
const {TweetController,LikeController,CommentController,UserController}=require("../../controllers/index")

const router=express.Router();

router.post("/tweet",TweetController.create);
router.post("/tweet/:id",TweetController.getTweet);

router.post("/likes",LikeController.toggleLike)

router.post("/comment",CommentController.create);

router.post("/signup",UserController.signup)

module.exports=router

