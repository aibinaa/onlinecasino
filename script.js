const http = require('http')
var server = http.createServer((request, responce) => {
    responce.writeHead(200);
    responce.end("Hello http")
});
server.listen(7777, () => {
    console.log('server listens port')
})
