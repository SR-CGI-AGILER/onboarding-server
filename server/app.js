var express =  require('express');
var passport = require('passport');
var session = require('express-session');
var request = require('superagent');

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'key'
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post('/login', function(req,res) {
    
    request
     .post('https://www.googleapis.com/oauth2/v3/token')
     .set({
       'Content-Type': 'application/x-www-form-urlencoded',
       'X-Requested-With': 'XMLHttpRequest'
     })
     .send({
       'code': req.body.code,
       'redirect_uri': 'http://localhost:4200/torii/redirect.html',
       'client_id': '264135382207-353mvbaf3r1084pspp2mshg7qv56m00i.apps.googleusercontent.com',
       'client_secret': 'IrqVsUnAY8dqkJRpjfGp_ULm',
       'grant_type': 'authorization_code',
       'scope': '',

     }).then(data => {
       res.send(JSON.parse(data.text))
     })
})

app.listen('8000', ()=>{
        console.log('Server Running on 8000');
    });












































// const express = require('express');
// const passport = require('passport');
// const bodyParser = require('body-parser');
// const session = require('express-session');

// const onboarding = require('./api/onboarding/index');
// const auth = require('./api/onboarding/auth');
 
// const app = express();

// // app.use(function(req, res, next) {
// //     res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
// //     res.setHeader("Access-Control-Allow-Methods", "GET");
// //     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //     next();
// //   });
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header('Access-Control-Allow-Methods', '*');
//     next();
// });
// app.use(session({
//     secret: "mysecret"
// }));
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(passport.initialize());
// app.use(passport.session());

// app.use('/', onboarding);

// app.listen('8000', ()=>{
//     console.log('Server Running on 8000');
// });


