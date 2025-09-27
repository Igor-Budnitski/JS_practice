const favoriteBooks = [
    {
        id: 1,
        title: 'Head First JavaScript Programming',
        author: 'Eric Freeman',
        price: 29.99,
        genre: 'Programming',
    },
    {
        id: 2,
        title: 'You Don’t Know JS',
        author: 'Kyle Simpson',
        price: 39.99,
        genre: 'Programming',
    },
    {
        id: 3,
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        price: 49.99,
        genre: 'Programming',
    },
    {
        id: 4,
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        price: 29.99,
        genre: 'Fantasy',
    },
    {
        id: 5,
        title: 'The Witcher',
        author: 'Andrzej Sapkowski',
        price: 19.99,
        genre: 'Fantasy',
    },
]
const numbers = [1,2,3,4];

// console.log(numbers.sort((prev, next)=> {
//     return next - prev;
// }));

// const nums = numbers.toSorted((prev, next) => {
//     return prev-next;
// });

// console.log(numbers.join('-'));
// console.log(nums.join('-'));

// let res = numbers.forEach((number) => number * 2);
//
// console.log(numbers);
// console.log(res);


// favoriteBooks.sort((prev, next) => {
//     return prev.price - next.price
// })
//
// console.log(favoriteBooks)

// Или сокращённый вариант
// favoriteBooks.sort((prev, next) => prev.price - next.price)


const pets = [
    { name: "Мистер Вискас", type: "кот" },
    { name: "Страйдер", type: "собака" },
    { name: "Бамбл", type: "жабка" },
    { name: "Черепаха Ниндзя", type: "черепаха" }
]

console.log("Отправляем приглашения на вечеринку для питомцев!")

pets.forEach((pet, index) => {
    let invitationNumber = index + 1; // Нумерация начинается с 1
    const message = `Приглашение №${invitationNumber}: Привет, ${pet.name}! Приходи на вечеринку, будет весело!`
    console.log(message)
});

console.log("Все приглашения отправлены, ждем гостей!");