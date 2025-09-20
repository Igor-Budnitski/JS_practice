
/*for (let i = 0; i < 10; i++) {
    console.log(`Random number: ${Math.floor(Math.random() * (10))}`)
}*/
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(Math.ceil(Math.random() * (6)));
}

// console.log(arr);

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(`Rol dice 1 to 6: ${rollDice()}`);
console.log(`Rol dice 1 to 6: ${rollDice()}`);
console.log(`Rol dice 1 to 6: ${rollDice()}`);
console.log(`Rol dice 1 to 6: ${rollDice()}`);
console.log(`Rol dice 1 to 6: ${rollDice()}`);
console.log(`Rol dice 1 to 6: ${rollDice()}`);
console.log(`Rol dice 1 to 6: ${rollDice()}`);
console.log(`Rol dice 1 to 6: ${rollDice()}`);
console.log(`Rol dice 1 to 6: ${rollDice()}`);
console.log(`Rol dice 1 to 6: ${rollDice()}`);

