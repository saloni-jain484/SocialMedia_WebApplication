const passport=require('passport');
const passportJWT=require('passport-jwt').Strategy;

const ExtractJWT=require('passport-jwt').ExtractJwt;
const User=require('../models/user');

let opts={
    jwtFormRequest:ExtractJWT.fromAuthHeaderAsBearerToken,
    secretOrKey='codeial'
}