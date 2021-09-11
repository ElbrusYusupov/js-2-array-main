// Creating object

// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     public: true,
//     rating: 8.38,
// };
// console.log(book.title);
// console.log(book.genres);


// console.log(book.public);


// console.log(book.price);


const user = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: {
        country: 'Jamaica',
        city: 'Ocho Rios',
    },
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
    hobbies: ['swimming', 'music', 'sky-fi'],
};

const location = user.location.city
const likes = user.stats.likes
// console.log(location);
// console.log(likes);

const hobbies = user.hobbies;
// console.log(hobbies);

const firstHobby = hobbies[0];
const lastHobby = hobbies[hobbies.length - 1];
const secondaryHobby = hobbies[1];
const amountHobbies = hobbies.length


const user2 = {
    firstHobby,
    lastHobby,
    secondaryHobby,
    amountHobbies
}

// console.log(user2);

// console.log(user2.firstHobby);

// console.log(firstHobby);
// console.log(lastHobby);
// console.log(secondaryHobby);
// console.log(amountHobbies);


const book = {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['historical prose', 'adventure'],
    public: true,
    rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = 'en';
book.translations = ['ua', 'ru'];
book.genres.push('drama')
book.rating = 9;

// console.log(book.translations);

// console.log(book.pageCount);

// console.log(book.originalLanguage);

// console.log(book.public = false);


// console.log(book);






// const propName = 'name';
// const user = {
//     age: 25,
//     [propName]: 'Henry Sibola',
// };

// console.log(user);

// // user[propName] = 'Henry Sibola';
// // console.log(user);

// // console.log(user.name);




// ✅ Логически и синтаксически сгруппированные сущности

// const bookShelf = {
//     books: ['The last Kingdom', 'Dream Guardian'],
//     // method of object
//     getBooks() {
//         console.log('This method will return all books - method of $books$');
//     },
//     // method of object
//     addBooks(bookName) {
//         console.log('This method will adding a new book into the property of the $books$');
//     },
// };

// bookShelf.getBooks();
// bookShelf.addBooks();



// const bookShelf = {
//     books: ['The Last kingdom'],
//     getBooks() {
//         console.log(this);
//     },
// };

// bookShelf.getBooks()

const bookShelf = {
    books: ['The Last Kingdom'],
    getBooks() {
        return this.books;
    },
    addBooks(bookName) {
        this.books.push(bookName);
    },
    removeBook(bookName) {
        const bookIndex = this.books.indexOf(bookName);
        this.books.splice(bookIndex, 1);
    },
};
// console.log(bookShelf.getBooks());
bookShelf.addBooks("The Mist");
bookShelf.addBooks('Defender');
// console.log(bookShelf.getBooks());
bookShelf.removeBook('The Mist')
// console.log(bookShelf.getBooks());



