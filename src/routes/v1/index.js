const express=require("express");
const {TweetController,LikeController,CommentController,UserController}=require("../../controllers/index")
const {authenticate}=require("../../middlewares/authenticate")
const router=express.Router();

router.post("/tweet",authenticate,TweetController.create);
router.post("/tweet/:id",TweetController.getTweet);

router.post("/likes",LikeController.toggleLike)

router.post("/comment",CommentController.create);

router.post("/signup",UserController.signup)
router.post("/login",UserController.login)

module.exports=router

