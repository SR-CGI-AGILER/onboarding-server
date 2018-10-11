const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
var GitHubStrategy = require('passport-github2').Strategy;

const keys = require('../../config/keys');



passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    },(accessToken, refreshToken, profile, callbackURL)=>{
        console.log(profile);
        return callbackURL(null, profile);
    })
);

passport.use(
    new GitHubStrategy({
        clientID: keys.github.clientID,
        clientSecret: keys.github.clientSecret,
        callbackURL: '/auth/github/redirect'
    },(accessToken, refreshToken, profile, callbackURL)=>{
        console.log(profile);
    })
);