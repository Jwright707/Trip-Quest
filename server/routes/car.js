const express = require('express');
const smartcar = require('smartcar');

const router = express.Router();


const client = new smartcar.AuthClient({
    clientId: 'SMARTCAR_CLIENT_ID',
    clientSecret: 'SMARTCAR_CLIENT_SECRET',
    redirectUri: '/api/car/callback',
    scope: ['read_vehicle_info'],
    testMode: true,
});



router.get('/callback', (req, res, next) => {
    let access;
    
    if (req.query.error) {
        return next(new Error(req.query.error));
    }
    
    return client.exchangeCode(req.query.code)
    .then(_access => {
        access = _access;
        
        return smartcar.getVehicleIds(access.accessToken);
    })
    .then(res => {
        const vehicle = new smartcar.Vehicle(res.vehicles[0], access.accessToken);
        
        return vehicle.info();
    })
    .then(data => {
        console.log(data);
        
        res.json(data);
    })
});

router.get('/login', (req, res, next) => {
    const link = client.getAuthUrl({state: 'MY_STATE_PARAM'});

    res.redirect(link);
});

router.get('/logout');

router.get('/error');

router.get('/vehicles');

router.post('/request');

module.exports = router;