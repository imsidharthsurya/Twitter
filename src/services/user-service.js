const {UserRepository}=require("../repository/index")

class UserService{
    constructor(){
        this.userRepository=new UserRepository();
    }

    async signup(data){
        try{
            const user=await this.userRepository.create(data);
            return user
        }catch(err){
            throw err;
        }
    }

    async getUserByEmail(email){
        try{
            const user=await this.userRepository.getUserBy({email})
            return user;
        }catch(err){
            throw err;
        }
    }
}

module.exports=UserService