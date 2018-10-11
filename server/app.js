const express = require('express');
const passport = require('passport');
const onboarding = require('./api/onboarding/index');
const auth = require('./api/onboarding/auth');

const app = express();

app.use(passport.initialize());
app.use(passport.session());


app.use('/', onboarding);

// app.get('/', (res, req) => {

// });

app.listen('8000', ()=>{
    console.log('Server Running on 8000');
});