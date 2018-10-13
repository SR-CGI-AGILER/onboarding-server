const onboardingDao = require('../../dao/onboarding/onboarding.dao');
const request = require('superagent');
const keys = require('../../config/keys');

function getToken(req, res){
    const request_body={
        "code":req.body.code,
        "redirect_uri":req.body.redirect_uri,
        "client_id":keys.google.clientID,
        "client_secret":keys.google.clientSecret,
        "scope":"profile",
        "grant_type":"authorization_code"
    }
    const headers={
        "Content-Type":"application/x-www-form-urlencoded",
        "X-Requested-With":"XMLHttpRequest"
    }
    
    request
        .post('https://accounts.google.com/o/oauth2/token')
        .set(headers)
        .send(request_body)
        .end((err,response)=>{
            console.log(response.text);
            res.send(response.text);
        });
        
}


module.exports = {
    getToken
}