
/*for (let i = 0; i < 10; i++) {
    console.log(`Random number: ${Math.floor(Math.random() * (10))}`)
}*/
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(Math.ceil(Math.random() * (6)));
}

console.log(arr);