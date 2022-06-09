// const http = require('http')
// var server = http.createServer((request, responce) => {
//     responce.writeHead(200);
//     responce.end("Hello http")
// });
// server.listen(7777, () => {
//     console.log('server listens port')
// })

const express = require('express')

const app = new express()

app.use(express.static('static')).listen(9999, () => {
    console.log('express server listen port 9999')
})

