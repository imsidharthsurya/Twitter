const Tweet=require("../models/tweet");

class TweetRepository{

    async create(data){
        try{
            const tweet=await Tweet.create(data);
            return tweet;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }

    async get(id){
        try{
            const tweet=await Tweet.findById(id);
            return tweet;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }

    async getWithComments(id){
        try{
            const tweet=await Tweet.findById(id).populate({path:'comments'});
            return tweet;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }

    async update(id,data){
        try{
            const tweet=await Tweet.findByIdAndUpdate(id,data,{new:true});
            return tweet;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }

    async delete(id){
        try{
            const tweet=await Tweet.findByIdAndDelete(id);
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
}

module.exports=TweetRepository