const express=require("express");
const {TweetController,LikeController}=require("../../controllers/index")

const router=express.Router();

router.post("/tweet",TweetController.create);

router.post("/likes",LikeController.toggleLike)

module.exports=router

