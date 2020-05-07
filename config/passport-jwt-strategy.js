const passport=require('passport');
const JWTSrategy=require('passport-jwt').Strategy;

const ExtractJWT=require('passport-jwt').ExtractJwt;
const User=require('../models/user');

let opts={
    jwtFormRequest:ExtractJWT.fromAuthHeaderAsBearerToken,
    secretOrKey='codeial'
}

passport.use(new JWTSrategy(opts,function(jwtPayLoad,done){

    User.findById(jwtPayLoad._id,function(err,done){
        if(err){
            console.log("error is finding user using jwt");
            return (err);
        }
        if(user){
            return done(null,user);
        }
        else{
            return done(null,false);
        }

    })
}));