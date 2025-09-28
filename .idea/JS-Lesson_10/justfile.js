/*var createHelloWorld = function() {

    return function(...args) {
        console.log("Hello World")
    }
};*/

const map = new Map([
    ['name', 'Alice'],
    ['age', 30],
    ['city', 'Paris']
]);

console.log('--- for...in ---');
for (let key in map) {
    console.log(key); // ❌ ничего не выведет
}

console.log('--- for...of ---');
for (let [key, value] of map) {
    console.log(`Key: ${key} // Value: ${value}`); // 👉 ['name', 'Alice'], ['age', 30], ['city', 'Paris']
}

let arr = [1,2,3,4];

for (const number of arr) {
    console.log(`Arr: ${number}`);
}

for (const arrKey in arr) {
    console.log(`ArrKey: ${arrKey}`);
}

const user = {
    name: 'Igor',
    age: 32,
    isMarried: true,
    hobbies: {
        sport: 'baseball',
        reading: 'books'
    },
}

for (const [key, value] of Object.entries(user)) {
    console.log(value >10);
}

console.log(Math);


const newArr = arr.map((num) => num + 10);
console.log(newArr, arr);
