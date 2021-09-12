// // Creating object

// // const book = {
// //     title: 'The Last Kingdom',
// //     author: 'Bernard Cornwell',
// //     genres: ['historical prose', 'adventure'],
// //     public: true,
// //     rating: 8.38,
// // };
// // console.log(book.title);
// // console.log(book.genres);


// // console.log(book.public);


// // console.log(book.price);


// const user = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: {
//         country: 'Jamaica',
//         city: 'Ocho Rios',
//     },
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
//     hobbies: ['swimming', 'music', 'sky-fi'],
// };

// const location = user.location.city
// const likes = user.stats.likes
// // console.log(location);
// // console.log(likes);

// const hobbies = user.hobbies;
// // console.log(hobbies);

// const firstHobby = hobbies[0];
// const lastHobby = hobbies[hobbies.length - 1];
// const secondaryHobby = hobbies[1];
// const amountHobbies = hobbies.length


// const user2 = {
//     firstHobby,
//     lastHobby,
//     secondaryHobby,
//     amountHobbies
// }

// // console.log(user2);

// // console.log(user2.firstHobby);

// // console.log(firstHobby);
// // console.log(lastHobby);
// // console.log(secondaryHobby);
// // console.log(amountHobbies);


// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     public: true,
//     rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];
// book.genres.push('drama')
// book.rating = 9;

// // console.log(book.translations);

// // console.log(book.pageCount);

// // console.log(book.originalLanguage);

// // console.log(book.public = false);


// // console.log(book);






// // const propName = 'name';
// // const user = {
// //     age: 25,
// //     [propName]: 'Henry Sibola',
// // };

// // console.log(user);

// // // user[propName] = 'Henry Sibola';
// // // console.log(user);

// // // console.log(user.name);




// // ✅ Логически и синтаксически сгруппированные сущности

// // const bookShelf = {
// //     books: ['The last Kingdom', 'Dream Guardian'],
// //     // method of object
// //     getBooks() {
// //         console.log('This method will return all books - method of $books$');
// //     },
// //     // method of object
// //     addBooks(bookName) {
// //         console.log('This method will adding a new book into the property of the $books$');
// //     },
// // };

// // bookShelf.getBooks();
// // bookShelf.addBooks();



// // const bookShelf = {
// //     books: ['The Last kingdom'],
// //     getBooks() {
// //         console.log(this);
// //     },
// // };

// // bookShelf.getBooks()

// const bookShelf = {
//     books: ['The Last Kingdom'],
//     getBooks() {
//         return this.books;
//     },
//     addBooks(bookName) {
//         this.books.push(bookName);
//     },
//     removeBook(bookName) {
//         const bookIndex = this.books.indexOf(bookName);
//         this.books.splice(bookIndex, 1);
//     },
// };
// // console.log(bookShelf.getBooks());
// bookShelf.addBooks("The Mist");
// bookShelf.addBooks('Defender');
// // console.log(bookShelf.getBooks());
// bookShelf.removeBook('The Mist')
// // console.log(bookShelf.getBooks());


// ________________________________________________________________________________________________________________________
// Перебор объекта


// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     rating: 8.38,
// };

// for (const key in book) {
// //     console.log(key);
// // console.log(book[key]);
    
// }

// // Метод hasOwnProperty()

// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// // console.log(animal);
// // console.log(dog);
// // console.log(dog.name);
// // console.log(dog.legs);

// // console.log('name' in dog);
// // console.log('legs' in dog);

// // console.log(dog.hasOwnProperty('name'));
// // console.log(dog.hasOwnProperty('legs'));

// // console.log(animal.hasOwnProperty('name'));
// // console.log(animal.hasOwnProperty('legs'));
// // console.log(animal.name);

// for (const key in book) {
//     if (book.hasOwnProperty(key)) {
//             // console.log(key);
//             // console.log(book[key]);
//     }

    
// }
// const keys = Object.keys(book);
// // console.log(keys);


// Метод Object.keys()

// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     rating: 8.38,
// };
// const keys = Object.keys(book);
// for (const key of keys) {
//     console.log(key);
//     console.log(book[key]);
// }

// console.log(keys);

// const values = Object.values(book)
// console.log(values);


// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
// };

// const values = Object.values(goods);

// let total = 0;

// for (const value of values) {
//     total += value;
// }
// console.log(total);


// // Метод Object.entries()

//  const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     rating: 8.38,
// };
// const keys = Object.keys(book);
// const values = Object.values(book)
// const entries = Object.entries(book)

// console.log(keys);
// console.log(values);

// console.log(entries);



// $$ Массив обьектов

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смешного человека",
//     author: "Федор Достоевский",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//     // console.log(book);
//     // console.log(book.title);
//     // console.log(book.author);
//     // console.log(book.rating);
// }

// const bookNames = [];
// for (const book of books) {
//     bookNames.push(book.title)
// }
// console.log(bookNames);

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating);

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)){

//   keys.push(key);
//   values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// // console.log(keys);
// // console.log(values);

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   let sum;
//   for (const key in object) {
//   if (object.hasOwnProperty(key)){
//   	sum = key
//   	}
//   }
  
	
//   // Change code above this line
//   return propCount;
// }


// const book = {
//   title: "The Last Kingdom",
//   genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   author: 'Джерад Батлер'
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// 	for (let i = 0; i < products.length; i++) {
//     if (productName.includes(products[i].name)) {
//     	return products[i].price
//     	} 
//     } return null
//   // Change code above this line
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));

// console.log(getProductPrice("Scanner"));

// console.log(getProductPrice("Droid"));

// console.log(getProductPrice("Engine"));



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let searchResult = [];
//   for (const product of products) {
//     if (product[propName]) {
//       searchResult.push(product[propName]);
//     }
//   }
//   return searchResult;
  // Change code above this line
    
    // как тут работает иф.так как нам нужно проверить само свойство,
    // то достаточно написать product[propName], если вернет тру(такое свойство
    // есть), выполнится тело условия кода, если фолс, то не выполнится.если нужно
    // сравнивать значения свойств, то тут уже точно нужен строгий оператор
    // сравнения ===
// }



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// 	let totalPrice = 0;
  	
//   for (const product of products) {
//       if (product[productName]) {
//     const prise = product.price;
//   	const quantity = product.quantity;
//     totalPrice = prise*quantity
//   	} return totalPrice
//   }
  

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];

for (const book of books) {
  // Объект книги
//   console.log(book);
  // Название
//   console.log(book.title);
  // Автор
//   console.log(book.author);
  // Рейтинг
  console.log(book.rating);
}