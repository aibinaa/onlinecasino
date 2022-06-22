const express = require('express');
const randomizer = require('./randomizer');

const app = new express();

app.use(express.json());

const responseObj = {};

app.post('/name', (req, res) => {
    responseObj.name = req.body.name;
});

app.post('/user', (request, response) => {
    let randomNumber = randomizer()
    if (+request.body.userNumber === randomNumber) {
        responseObj.message = `${responseObj.name}, you won!`;
    } else {
        responseObj.message = `${responseObj.name}, you lost!`;
    }
    response.send(JSON.stringify(responseObj));
});

app.use(express.static('static')).listen(9999, () => {
    console.log('Express server listens on port 9999');
});