const express = require('express');
const randomizer = require('./randomizer');

const app = new express();

app.use(express.json());

let fs = require('fs')

const responseObj = {
    money: 5000
};

app.post('/name', (req, res) => {
    responseObj.name = req.body.name;
   
});
 console.log(responseObj.name)
app.post('/user', (request, response) => {
    if (responseObj.money == 0) {
        responseObj.message = 'no money on balance'

        fs.appendFile('debts.txt', `${responseObj.name}: finished game at ${new Date()} \n`, err => {
            if (err) console.log(err)
            console.log('written')
        })
    } else {
        let randomNumber = randomizer()
        if (+request.body.userNumber === randomNumber) {
            responseObj.money += 1000;
            responseObj.message = `${responseObj.name}, you won!`;
        } else {
            responseObj.money -= 1000;
            responseObj.message = `${response.name}, you lost!`;
        }
    }
    response.send(JSON.stringify(responseObj));
});

app.use(express.static('static')).listen(9999, () => {
    console.log('Express server listens on port 9999');
});