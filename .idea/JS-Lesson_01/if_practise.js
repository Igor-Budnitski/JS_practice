

function randomAge() {
    return Math.floor(Math.random() * (30 - 15 + 1) + 15);
}

for (let i = 0; i < 10; i++) {
    let a = randomAge();
    console.log(`${a} : ${a >= 18 ? true : false}`);
}