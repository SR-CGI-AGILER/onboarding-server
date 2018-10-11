const router = require('express').Router();
const passport = require('passport');
const onboardingController = require('./onboarding.controller');
const path = require('path');

router.get('/onboarding', onboardingController.hello);

//Authentication Route with Google
router.get('/auth/google', passport.authenticate('google',{
    scope: ['email']
}));

//Authentication Route with Github
router.get('/auth/github', passport.authenticate('github',{ 
    scope:['user:email']
}));

//Authentication Callback Url for Google
router.get('/auth/google/redirect', 
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  function(req, res) {
    res.redirect('/auth/google');
});


//Authentication Callback Url for Github
router.get('/auth/github/redirect',
    passport.authenticate('github', { failureRedirect: '/auth/github' }),
    (req, res) => {
    res.send('you reached the redirect URI');
});

router.get('/test',(req,res)=>{
    console.log(req.session);
});

router.get('/team/:teamId/user/:userId',()=>{
    
});

router.get('/team/:teamId',()=>{

});

router.get('/user/:userId', ()=>{

});

module.exports = router;