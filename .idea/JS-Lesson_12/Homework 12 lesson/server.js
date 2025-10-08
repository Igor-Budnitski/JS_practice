const http = require('http');
const fs = require('fs');

const delay = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject('Rejected Error', err)
            else resolve(data);
        });
    })
}

const server = http.createServer(async (req, res) => {
    if (req.url === '/home') {
        const data = await readFile('pages/home.html');
        res.write(data);
        res.end();
    }

    if (req.url === '/about') {
        await delay(5000);
        res.write("ABOUT COURSE PROMISE!");
        res.end();
    }
})

server.listen(3000);