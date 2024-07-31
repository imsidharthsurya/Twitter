var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const User=require("../models/user")
/**
 * now we've to create options object
 * pass 2 things in that 1 is bearertoken b/c 
 * we'll be passing jwt as a bearer token
 * and second is secret key which we've used while creating jwt
 */
var opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'twitter_backend'
}

/**
 * now we've to call passport.use function
 * so for that we'll create a function which will take
 * passport object as a parameter & will call passport.use()
 * from inside it
 */

const passportAuth=(passport)=>{
    passport.use(new JwtStrategy(opts,async (jwt_payload,done)=>{
        //grab the user from the id from jwt payload
        //b/c creating jwt from id & email so it'll have both
        const user=await User.findById(jwt_payload.id)

        if(!user){
            //user not found
            done(null,false)
        }else{
            //user found
            done(null,user)
        }
    }))
}

module.exports={
    passportAuth
}