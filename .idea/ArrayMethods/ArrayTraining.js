/*Удвоение чисел
Дан массив чисел:
Создай новый массив, где каждое число умножено на 2.
*/

const numbers = [1, 2, 3, 4, 5];

let results = numbers
                .map((num) => num * 3)
                .filter((num) => num % 2 === 0);
console.log(results);

const fruits = ['apple', 'banana', 'orange', 'kiwi','aloe'];

console.log(fruits.filter((word) => word.toLowerCase().startsWith('a'))); // returns all words that start with 'a'
console.log(fruits.find((word) => word.toLowerCase().startsWith("a"))); // returns first word that starts with 'a'

// reduce method

let sum = numbers.reduce((acc, current, index, array) => acc + current, 0);

console.log(sum);

// count all letters in words in array

const words = ['hello', 'world', 'js', 'array'];

const letterCounter = words.reduce((acc,current, index, array) => acc + current.length, 0);
console.log(letterCounter);