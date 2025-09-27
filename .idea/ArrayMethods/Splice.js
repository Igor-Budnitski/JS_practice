// Splice
let numbers = [1,2,3,4,5];

numbers.splice(1,3, 11,22,33,44);

console.log(numbers);

// Slice

let nums1 = [1,2,3,4,5,6];

console.log(nums1.slice(0, 5));

nums1.forEach((number, index, array) => {
    console.log(`In array: ${array} \n -- Where index: ${index} \n -- We have a value: \`${number}\``);
})

console.log(nums1.indexOf(4));
console.log(nums1.includes(122));
console.log(nums1.lastIndexOf(3));

// find

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];

let user = users.find(item => item.id == 1);

console.log(user.name);// Вася

console.log(numbers.sort((a,b) => b-a));