/*
const orderFood = (dish, callback) => {
    console.log(`Начинаю готовить ${dish}...`)
    setTimeout(() => {
        console.log(`${dish} готово!`)
        callback(dish);
    }, 1000); // Готовим еду 1 секунду
}

const deliverFood = (dish) => {
    console.log(`Доставляю ${dish} прямо к вашему столу!`)
}

orderFood("ризотто", deliverFood)*/
/*
const users = [
    { name: "Алиса", age: 25 },
    { name: "Боб", age: 30 },
    { name: "Клара", age: 20 },
    { name: "Григорий", age: 35 }
];

// Сортируем массив людей по возрасту в порядке возрастания
const sortedUsers = users.sort((a, b) => b - a)

console.log("Люди, отсортированные по возрасту:", sortedUsers)*/

/*
const movies = [
    { title: "Назад в будущее", rating: 8.5 },
    { title: "Начало", rating: 8.8 },
    { title: "Матрица", rating: 8.8 },
    { title: "Паразиты", rating: 8.6 },
    { title: "Тёмный рыцарь", rating: 9.0 }
]

const sortedMovies = movies.sort((a, b) => {
    if (b.rating > a.rating) {
        return 1
    } else if (a.rating === b.rating) {
        return 0
    } else {
        return -1
    }
})

console.log("Фильмы, отсортированные по рейтингу:", sortedMovies)*/
/*
const library = [
    { title: "Убийство в Восточном экспрессе", author: "Агата Кристи", genre: "детектив" },
    { title: "Ведьмак", author: "Анджей Сапковский", genre: "фэнтези" },
    { title: "Научное мышление", author: "Карл Поппер", genre: "наука" },
    { title: "Властелин колец", author: "Дж. Р. Р. Толкиен", genre: "фэнтези" },
    { title: "1984", author: "Джордж Оруэлл", genre: "дистопия" }
];


const fantasyBooks = library.filter((book) => {
    return book.genre === 'фэнтези';
})

console.log("Фэнтезийные книги в библиотеке:", fantasyBooks)*/
/*
const numbers = [1, 2, 3, 4, 5]

// Преобразуем массив чисел в массив их квадратов
const squaredNumbers = numbers.map(number => {
    // return number * number;
    return Math.sqrt(number);
})

console.log("Квадраты чисел:", squaredNumbers) // Должны получить [1, 4, 9, 16, 25]*/

/*
const scientists = [
    { firstName: "Альберт", lastName: "Эйнштейн", years: "1879-1955", mainWork: "Теория относительности" },
    { firstName: "Исаак", lastName: "Ньютон", years: "1643-1727", mainWork: "Классическая механика" },
    { firstName: "Мария", lastName: "Кюри", years: "1867-1934", mainWork: "Исследование радиоактивности" },
    { firstName: "Галилео", lastName: "Галилей", years: "1564-1642", mainWork: "Совершенствование телескопа" }
]

// Преобразуем список ученых в массив с объединенными именами
const scientistProfiles = scientists.map(scientist => {
    return {
        name: `${scientist.firstName} ${scientist.lastName}`,
        years: scientist.years,
        mainWork: scientist.mainWork
    }
})

console.log("Профили ученых:", scientistProfiles)
*/
