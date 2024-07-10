const Tweet=require("../models/tweet");
const CrudRepository=require("./crud-repository")

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);
        //this will call constructor of crudRepo with tweet model.
    }

    async getWithComments(id){
        try{
            const tweet=await Tweet.findById(id).populate({
                path:'comments',
                populate:{
                    path:'comments'
                }
            });
            return tweet;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }

    async getAll(limit,offset){
        try{
            const tweet=await Tweet.find().limit(limit).skip(offset);
            return tweet;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }

    async find(id){
        try{
            const tweet=await Tweet.findById(id).populate({path:"likes"});
            return tweet;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }
}

module.exports=TweetRepository