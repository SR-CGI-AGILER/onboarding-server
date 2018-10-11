const passport = require('passport');
const app = require('express')();
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const onboardingDao = require('../../dao/onboarding/onboarding.dao');


const keys = require('../../config/keys');

passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    },(accessToken, refreshToken, profile, callbackURL)=>{
        app.use(session({
            cookie:{
                accessToken: accessToken
            }
        }));
        onboardingDao.addRecord(profile.emails[0].value,profile.displayName,profile.photos[0].value).then(err=>{
            if(err) throw err;
        });
        return callbackURL(null, {
            googleId: profile.id, 
            email: profile.emails[0].value,
            name: profile.displayName,
            profilePic: profile.photos[0].value
        });
    })
);

passport.use(
    new GitHubStrategy({
        clientID: keys.github.clientID,
        clientSecret: keys.github.clientSecret,
        callbackURL: '/auth/github/redirect'
    },(accessToken, refreshToken, profile, callbackURL)=>{

        app.use(session({
            cookie:{
                accessToken: accessToken
            }
        }));

        
        onboardingDao.addRecord(profile.emails[0].value,profile.displayName,profile.photos[0].value).then(err=>{
            if(err) throw err;
        });
        return callbackURL(null, {
            
            githubId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            profilePic: profile.photos[0].value      
        });
    })
);

passport.serializeUser(function(user,done){
    done(null, user);
});

passport.deserializeUser(function(id, done){
    done(null, id);
});