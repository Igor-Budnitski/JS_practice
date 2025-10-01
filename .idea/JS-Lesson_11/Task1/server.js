import http from 'http';


const server = http.createServer((req, res) => {
    console.log("✅ Server starting...");
    if (req.url === '/hello' && req.method === 'GET') {
        const today = new Date().toISOString();
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello! \n Current date/time: ${today} \n Req url: ${req.url} \n Req method ${req.method}`);
    } else if (req.url === '/bye' && req.method === 'GET'){
        const now = new Date();
        console.log(now);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Goodbye my dear friend! ${now}`);
    }
    else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(3000);
