const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');

const onboarding = require('./api/onboarding/index');
const auth = require('./api/onboarding/auth');
 
const app = express();

// app.use(function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
//     res.setHeader("Access-Control-Allow-Methods", "GET");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', '*');
    next();
});
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