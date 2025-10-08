const http = require('http');
const fs = require('fs');

const delay = (ms) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve()
        })
    }, ms)
}

const server = http.createServer(async (req, res) => {
    switch (req.url) {
        case '/home': {
            const data = await fs.readFile('./home.html', (err, data) => {
                res.write(data);
                res.end();
            })
            break;
        }
        case '/about': {
            await delay(100000);
            res.write("ABOUUTTT!!!");
            res.end();
            break;
        }
        default: {
            res.write('404 not found');
            res.end();
            break;
        }
    }
});

server.listen(3003);