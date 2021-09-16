// 3/04

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];
// Change code above this line

// 3/06

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted')


// 3/07

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
  };

// Change code below this line

// 3/08
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
  	name,
	price,
	image,
	tags,
  // Change code above this line
};

// 03/09 
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
	 [emailInputName]: "henry.carter@aptmail.com",
	 [passwordInputName]: "jqueryismyjam",


  // Change code above this line
};

// 3/10
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
// Change code below this line


// 3/11

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)){

  keys.push(key);
  values.push(apartment[key]);
  }
  // Change code above this line
}


// 3/12
function countProps(object) {
  let propCount = 0;
  // Change code below this line
  let sum;
  for (const key in object) {
  if (object.hasOwnProperty(key)){
  	propCount += 1
  	}
  }
  
	
  // Change code above this line
  return propCount;
}


// 3 / 13

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
	for (const key of keys) {
    values.push(apartment[key])
    }

    // 3/14

    function countProps(object) {
  // Change code below this line
  let propCount = 0;
	const keys = Object.keys(object);
  for (const key of keys) {
  	propCount += 1
  }

  return propCount;
  // Change code above this line
}

// 3//15

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);


// 3/16
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
	const values = Object.values(salaries);
  for (const value of values) {
  totalSalary += value;
  }
  
  // Change code above this line
  return totalSalary;
}

// 3/17

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {

	hexColors.push(color.hex)
	rgbColors.push(color.rgb)
}
// Change code below this line

// 3/18

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
	for (let i = 0; i < products.length; i++) {
    if (productName.includes(products[i].name)) {
    	return products[i].price
    	} 
    } return null
  // Change code above this line
}


// 3/19

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let searchResult = [];
  for (const product of products) {
    if (product[propName]) {
      searchResult.push(product[propName]);
    }
  }
  return searchResult;
  // Change code above this line
    
    // как тут работает иф.так как нам нужно проверить само свойство,
    // то достаточно написать product[propName], если вернет тру(такое свойство
    // есть), выполнится тело условия кода, если фолс, то не выполнится.если нужно
    // сравнивать значения свойств, то тут уже точно нужен строгий оператор
    // сравнения ===
}
// 3/20
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  	let totalPrice = 0;
  
	for (let i = 0; i < products.length; i++) {
    if (productName.includes(products[i].name)) {
    	totalPrice = products[i].price * products[i].quantity
    	} 
    } return totalPrice


  // Пиши код выше этой строки
}


// 3/21 

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {yesterday, today, tomorrow} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

// 3/22 
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;


// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;


// 3/23

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
const {
  yesterday: highYesterday,
  today: highToday,
  tomorrow: highTomorrow,
  icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

} = highTemperatures


// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 3/24

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb, } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}
  

// 3/25
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const { today: {low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"},
  tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
} = forecast

// 3/26

// Change code below this line
function calculateMeanTemperature(forecast) {
  const { 
    today: { low: todayLow, high: todayHigh },
  	tomorrow: { low: tomorrowLow, high: tomorrowHigh },
	} = forecast
  
  // Change code above this line
  
  
  
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}


//3/30
function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
	return { ...{completed, category, priority}, ...data }
  // Change code above this line
}

/*Объявлена функция makeTask(data)
Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }
Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
Вызов makeTask({ text: "Buy bread" }) возвращает { category: "General", priority: "Normal", text: "Buy bread", completed: false }
*/

3 / 31
// Change code below this line
function add(...args) {
 let total = 0;
  for (const arg of args) {
  total += arg
  }
  
  return total;
  // Change code above this line
}

// 3 / 32
function addOverNum(firstNumber, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > firstNumber) {
    total += arg;
    }
  }

  return total;
  // Change code above this line
}

// 3/33

// Change code below this line
function findMatches(firstArg, ...args) {
  const matches = []; // Don't change this line
	for (const arg of args) {
    if (firstArg.includes(arg)) {
    matches.push(arg)
    }
    }
  // Change code above this line
  return matches;
}


// 3/34

const bookShelf = {
  books: ['The Last Kingdom', 'The guardian of dreams'],
  getBooks() {
    return 'Returning all books';
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    return `Deleting book ${bookName}`;
  },
  updateBook(oldName, newName) {
    const bookSplice = this.books.splice(oldName, 1, newName);
    return `Updating book ${oldName} to ${newName}`
  }

}

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// 3/35
const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    // Change code below this line
	const removeName = this.books.indexOf(oldName);
    this.books.splice(removeName, 1, newName)
    // Change code above this line
  },
};

// 3/36
const atTheOldToad = {
  // Change code below this line
potions: []


  // Change code above this line
};

// 3/37
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
	getPotions() {
    return this.potions
    }
  // Change code above this line
};

// 3/38
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
	return this.potions.push(potionName)


    // Change code above this line
  },
};

// 3/39

const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
	const removeName = this.potions.indexOf(potionName);
    this.potions.splice(removeName, 1)


    // Change code above this line
  },
};

// 3/40
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
	const updateName = this.potions.indexOf(oldName);
    this.potions.splice(updateName, 1, newName);

    // Change code above this line
  },
};

