// const http = require('http')
// var server = http.createServer((request, responce) => {
//     responce.writeHead(200);
//     responce.end("Hello http")
// });
// server.listen(7777, () => {
//     console.log('server listens port')
// })

const { response } = require('express')
const { request } = require('express')
const express = require('express')
const randomizer = require('./randomizer')
// const randomizer = require('./randomizer')
// console.log(randomizer(5))
const app = new express()

app.use(express.json())

app.post('/user', (request, response) => {
    let randomNumber = randomizer()
    if(request.body.userNumber === randomNumber) {
        console.log(`User number: ${request.body.userNumber}, random number: ${randomNumber} You won`);
    }
    else {
        console.log(`user number: ${request.body.userNumber}, random number: ${randomNumber} you lost`)
    }
    // console.log(request.body.userNumber)
})
app.use(express.static('static')).listen(9999, () => {
    console.log('express server listen port 9999')
})

// const randomizer = require('./randomizer')
// console.log(randomizer(5))