const http = require('http');
const fs = require('fs');
const path = require("node:path");

const delay = (ms, path) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.readFile(path, (err,data) => {
                if(err) reject(err)
                else resolve(data)
            })
        }, ms)
    })
}
const readFilePromise = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            // if (err) reject(`500 error path ${path} not found`, err)
            if (err) reject(err)
            else resolve(data);
        });
    })
}

const server = http.createServer(async (req, res) => {
    if (req.url === '/home') {
        try {
            const data = await readFilePromise('pages/home.html');
            res.write(data);
            res.end();
        } catch (err) {
            res.write(`500 ERROR, \nPath Home doesn't exists`);
            res.end();
        }
    }

    if (req.url === '/about') {
        try{
            const data = await delay(3000, 'pages/about.html');
            res.write(data);
            res.end();
        } catch (err) {
            res.write(`500 ERROR, \nPath About doesn't exists`);
            res.end();
        }
    }
})

server.listen(3000);