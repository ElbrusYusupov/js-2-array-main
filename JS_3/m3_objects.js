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




// // ??? ?????????????????? ?? ?????????????????????????? ?????????????????????????????? ????????????????

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
// ?????????????? ??????????????


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

// // ?????????? hasOwnProperty()

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


// ?????????? Object.keys()

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


// // ?????????? Object.entries()

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



// $$ ???????????? ????????????????

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "???? ???????????? ?????????????????? ??????",
//     author: "???????????? ??????????",
//     rating: 8.51,
//   },
//   {
//     title: "?????? ???????????????? ????????????????",
//     author: "?????????? ??????????????????????",
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
//   author: '???????????? ????????????'
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
//   Change code above this line
    
//     ?????? ?????? ???????????????? ????.?????? ?????? ?????? ?????????? ?????????????????? ???????? ????????????????,
//     ???? ???????????????????? ???????????????? product[propName], ???????? ???????????? ??????(?????????? ????????????????
//     ????????), ???????????????????? ???????? ?????????????? ????????, ???????? ????????, ???? ???? ????????????????????.???????? ??????????
//     ???????????????????? ???????????????? ??????????????, ???? ?????? ?????? ?????????? ?????????? ?????????????? ????????????????
//     ?????????????????? ===
// }



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // ???????? ?????? ???????? ???????? ????????????
// 	let totalPrice = 0;
  	
//   for (const product of products) {
//       if (product[productName]) {
//     const prise = product.price;
//   	const quantity = product.quantity;
//     totalPrice = prise*quantity
//   	} return totalPrice
//   }
  

//   // ???????? ?????? ???????? ???????? ????????????
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // ???????????? ??????????
// //   console.log(book);
//   // ????????????????
// //   console.log(book.title);
//   // ??????????
// //   console.log(book.author);
//   // ??????????????
//   console.log(book.rating);
// }


// // $$ $$ ?????????????????? spread ?? rest

// const temps = [17, -4, 25, 8, 11];
// console.log(temps);

// console.log(Math.max(temps));

// console.log(...temps);
// console.log(Math.max(...temps));

// const copyOfTemps = [...temps]
// console.log(copyOfTemps);

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];

// console.log(allTemps);
// console.log(lastWeekTemps);
// console.log(currentWeekTemps);

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, };
// const third = { propB: 20, ...first, ...second };
// console.log(third);

// const fourth = { ...first, ...second, propB: 20 }
// console.log(fourth);

// const fifth = { ...first, propB: 20, ...second };
// // console.log(fifth);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // ???????????????? ?????????????? ??????????????????
//   console.log(secondNumber); // ???????????????? ?????????????? ??????????????????
//   console.log(otherArgs); // ???????????? ?????????????????? ????????????????????
// }

// // multiply(1, 2);
// // multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// // $$$$ ???????????????????????????????? ????????????????

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   publ: true,
//   rating: 8.38,
// }


// const { title,
//   author,
//   publ,
//   rating,
//   coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = publ ? "??????????????????" : "????????????????";
// const message = `?????????? ${title} ???????????? ${author} ?? ?????????????????? ${rating} ?????????????????? ?? ${accessType} ??????????????.`;
// console.log(message);

// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: "?????? ???????????????? ????????????????",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // ?????? ???????????????? ????????????????
// console.log(secondCoverImage); // https://via.placeholder.com/640/480



// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// function doStuffWithBook(book) {
//   // ???????????? ??????-???? ???? ???????????????????? ??????????????
//   console.log(book.title);
//   console.log(book.numberOfPages);
//   console.log(book.downloads);

//   console.log(book.rating);

//   console.log(book.public);

//   // ?? ?????? ??????????
// }

// // ??? ?????? ??????????????
// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   public: true,
// });

// const showProfileInfo = function ({
//     name,
//     tag,
//     location,
//     avatar,
//     stats: {
//       followers,
//       views,
//       likes
//     }
//   }) {
//   console.log(name, tag, location, avatar, followers, views, likes);
// };

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// showProfileInfo(profile)





// const fn = function (params) { };
// console.log(fn(10, 5, true, [], {}, 6));

// fn({
//   age: 10,
//   friends: 5,
//   isOnline: true,
//   hobbies: [],
//   games: {},
//   rating: 6
// })


// // ??? ?????????????????? ?? ?????????????????????????? ?????????????????????????????? ????????????????
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // ?????? ?????????? ??????????????
//   getBooks() {
//     console.log("???????? ?????????? ?????????? ???????????????????? ?????? ?????????? - ???????????????? books");
//   },
//   // ?????? ?????????? ??????????????
//   addBook(bookName) {
//     console.log("???????? ?????????? ?????????? ?????????????????? ?????????? ?????????? ?? ???????????????? books");
//   },
// };

// // ???????????? ??????????????
// bookShelf.getBooks();
// bookShelf.addBook("?????????? ??????????");

// const bookShelf = {
//   books: ['The Last Kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     const bookSplice = this.books.splice(oldName, 1, newName);
//     return `Updating book ${oldName} to ${newName}`
//   }

// }

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName)
//     this.books.splice(bookIndex, 1)
//   },
// };

// console.log(bookShelf.getBooks());
// bookShelf.addBook('Haze');
// bookShelf.addBook('The guardian of dreams');
// console.log(bookShelf.getBooks());
// bookShelf.removeBook('Haze');
// console.log(bookShelf.getBooks());


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },


//   addPotion(newPotion) {
//     const { potions: array = { name, price } } = atTheOldToad;
    
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));


const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    
   for (const potion of this.potions) {
      
      if (potion.name === newPotion.name) {
        
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
	} 
     
   }
    this.potions.push(newPotion); 
  },
  removePotion(potionName) {


    for (const entry of iterable) {
  console.log(entry);
}
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};



// atTheOldToad.removePotion()
// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));
// 



