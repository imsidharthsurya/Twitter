const Like=require("../models/like");
const CrudRepository=require("./crud-repository");

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    async findByUserAndLike(data){
        //if user has already liked that particular tweet/comment
        //search with userId & modelId
        try{
            const res=await Like.findOne(data);
            return res;
        }catch(err){
            console.log("error in like repository user like ",err);
            throw err;
        }
    }
}

module.exports= LikeRepository;