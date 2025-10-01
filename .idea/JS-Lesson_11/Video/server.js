const http = require('http');
let requestCounter = 0;
const server = http.createServer((req,res) => {
    requestCounter++;
    res.write(`Hello Igor!: + ${requestCounter}`);
    res.end();
});

server.listen(3003);