const User=require("../models/user");
const CrudRepository=require("./crud-repository")

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    //get by email pwd anything depending upon the data
    async getUserBy(data){
        try{
            const response=await User.findOne(data);
            return response;
        }catch(err){
            throw err;
        }
    }
}

module.exports= UserRepository;