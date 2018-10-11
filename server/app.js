const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');

const onboarding = require('./api/onboarding/index');
const auth = require('./api/onboarding/auth');
 
const app = express();
app.use(session({
    secret: "mysecret"
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', onboarding);

app.listen('8000', ()=>{
    console.log('Server Running on 8000');
});