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

/* --- Function declaration

function printBookAuthors(books) {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].author);
    }
}*/

/*---- Function expression
const printBookAuthors = function(books) {

    for (let i = 0; i < books.length; i++) {
        const book = books[i]
        console.log(book.author)
    }
}*/

// Arrow function
/*const printBookAuthors = (books) => {
    for (let i = 0; i < books.length; i++) {
        const book = books[i]
        console.log(book.author)
    }
}

printBookAuthors(favoriteBooks);*/

/*const printCheapBooks = (books) => {
    for (let i = 0; i < books.length; i++) {
        const book = books[i]
        if (book.price < 30) {
            console.log(`${book.title} - ${book.price}`)
        }
    }
}*/

// printCheapBooks(favoriteBooks)

const processBooks = (books, callback) => {
    for (let i = 0; i < books.length; i++) {
        const book = books[i]
        callback(book)
    }
}

const logAuthor = (book) => {
    console.log(book.author)
}

const logCheapBooks = (book) => {
    if (book.price < 30) {
        console.log(`${book.title} - ${book.price}`)
    }
}

// Использование функции processBooks с разными колбэками
processBooks(favoriteBooks, logAuthor) // Выводит авторов всех книг
processBooks(favoriteBooks, logCheapBooks) // Выводит названия и цены дешёвых книг


favoriteBooks.forEach((book, index) => {
    console.log(book.price, index, book.author)
})
