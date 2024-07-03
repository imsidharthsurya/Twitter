const Hashtag=require("../models/hashtag")
class HashtagRepository{
    async create(data){
        try{
            const hashtag=await Hashtag.create(data);
            return hashtag;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }

    //create multiple hashtage ie. array of objects
    async bulkCreate(data){
        try{
            const hashtag=await Hashtag.insertMany(data);
            return hashtag;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }


    async get(id){
        try{
            const hashtag=await Hashtag.findById(id);
            return hashtag;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }

    async destroy(id){
        try{
            const hashtag=await Hashtag.findByIdAndDelete(id);
            return hashtag;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }

    //array of list of titles
    async findByName(titleList){
        try{
            const hashtags=await Hashtag.find({
                title:titleList
            })
            return hashtags;
        }catch(err){
            console.log("Error happened at repository layer: ",err);
        }
    }
}

module.exports=HashtagRepository