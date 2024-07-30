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

    async signIn(data){
        try{
            const user=await this.getUserByEmail(data.email)
            if(!user){
                //ie. user not found
                throw{
                    message:"User not found"
                }
            }
            //user found so compare the pwd using virtual function
            if(!user.comparePwd(data.password)){
                //ie. password not correct
                throw{
                    message:"Incorrect password"
                }
            }
            //ie. user found and pwd also matched so create jwt & return 
            const token=user.genJwt()
            return token
        }catch(err){
            throw err;
        }
    }
}

module.exports=UserService