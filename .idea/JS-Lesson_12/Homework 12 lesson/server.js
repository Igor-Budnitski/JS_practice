const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
    if (req.url === '/home'){
        res.write("Home page!");
        res.end();
        return;
    }

    if (req.url === '/about'){
        res.write('About page!')
        res.end();
        return;
    }
})

server.listen(3000);