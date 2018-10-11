const onboardingDao = require('../../dao/onboarding/onboarding.dao');

function hello(req, res) {
    onboardingDao.getData().then(data => {

        res.status('200').send({
            data: data
        })
    })
}

module.exports = {
    hello
}