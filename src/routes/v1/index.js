const express=require("express");
const {TweetController}=require("../../controllers/index")

const router=express.Router();

router.post("/tweet",TweetController.create);

module.exports=router

