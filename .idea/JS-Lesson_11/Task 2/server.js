import htpp from 'http';
import * as http from "node:http";

// Array of users
const users = [
    {id: 1, name: "Alice", age: 25},
    {id: 2, name: "Bob", age: 30},
    {id: 3, name: "Charlie", age: 22}
];

let counter =
    {
        "totalRequests": 0,
        "routes": {
            "/hello": 0,
            "/users": 0,
            "/about": 0
        }
    };


const server = http.createServer((request, response) => {

    console.log("✅ Server starting...");
    console.log(`URL Requeted: [${request.url}] with [${request.method}] at ${new Date().toISOString()}`);
    // Обрабоать с user id
    /* if (request.url.startsWith('/users/')){
         const urlStringArr = request.url.split('');
         const userID = urlStringArr[7];
         console.log(userID);
     }*/
    // more advanced solution.
    /*        const reqUrl = new URL(request.url, `http://${request.headers.host}`);
            // console.log(reqUrl);
            const pathName = reqUrl.pathname;*/

    console.log(counter);

    if (request.method === 'GET') {
        counter.totalRequests++;
        if (request.url === '/hello') {
            counter.routes["/hello"]++;
            response.end(`Hello from my server, my dear friend!\nIgor Budnitski`);
        } else if (request.url === '/time') {
            const time = new Date().toLocaleTimeString([], {hour12: false, hour: "2-digit", minute: "2-digit"});
            response.end(`Current time: ${time}`);
        } else if (request.url === '/about') {
            counter.routes["/about"]++;
            response.end('Hello. My name is Igor, I like bacon.');
        } else if (request.url === '/users') {
            counter.routes["/users"]++;
            response.end(JSON.stringify(users));
        }
        /*else if (pathName.startsWith("/users/")) {
                const parts = pathName.split('/');
                const id = parseInt(parts[2]);
                if (users[id]) {
                    response.end(JSON.stringify(users[id]));
                } else {
                    response.end(`User with ${id} not found!`);
                }
            }*/

        else if (request.url.startsWith('/users/')){
            const urlStringArr = request.url.split('');
            const userID = urlStringArr[7];
            console.log(userID);
            if (userID > users.length) {
                response.end(`User wtih ID: ${userID} do not exist`);
            } else {
                let user = users.find( u => u.id === +userID);
                response.end(JSON.stringify(user));
            }
        }
    } else
        response.end('Page not found');
});

server.listen(4000);