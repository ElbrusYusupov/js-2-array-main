// // Empty array

// // const arr = [];


// // // 'clients'  array with three elements
// // const clients = ['Mango', 'Poly', 'Ajax'];

// // console.log(clients);

// //// $$$$ Overriding

// const clients = ['Mango', 'Poly', 'Ajax'];

// // clients[0] = 'Kiwi';
// // console.log(clients[0]);

// // clients[3] = 'Alex';

// // console.log(clients[3]);

// // console.log(clients);

// //// $$$ Length of array 

// // clients.length = 5;
// // console.log(clients.length);
// // console.log(clients);
// // console.log(clients[4]);

// // clients.length = 2;
// // console.log(clients);

// //// $$$ Iteration into array

// // for (let i = 0; i < clients.length; i += 1) {
// //     console.log(clients[i]);
// // }

// // // Using a loop, the array can be filled with data
// // const numbers = [];

// // for (let i = 0; i < 3; i += 1) {
// //     numbers.push(`label-${i}`);
// // }
// // console.log('numbers: ', numbers);


// // //// $$ Loop for...of

// // // iteration into array 

// // for (const client of clients) {
// //     console.log('Logging clients: ', client);
// // }

// // // Итерация по строке
// // const string = 'javascript';

// // for (const character of string) {
// //   console.log(character);
// // }

// //// &&&& Instruction 'break' and 'continue'


// const clientNameToFind = 'Poly';

// let message = 'There is not a customer with this name in the database!';

// for (const client of clients) {
// /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//     if (client === clientNameToFind) {
//         message = 'There is a customer with this name in the database!';
//         break;
//     }

    

// }

// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }
//     console.log(`The number greater than ${threshold}: ${numbers[i]}`);
// }


// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // console.log(matrix[0].length);
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45


// //// $$$$ Assignment by reference and by value

// // let a = 5;
// // let b = a;
// // console.log(a);
// // console.log(b);

// // // Change the value of a

// // a = 10
// // console.log(a);
// // console.log(b);

// //// Complex types

// const a = ['Mango'];

// const b = a;
// console.log(a);
// console.log(b);

// a.push('Poly');
// console.log(a);
// console.log(b);


// b.push('Ajax')
// console.log(b);
// console.log(a);

//// $$$$ Methods of array 
//// $$$$ split() and join() Methods

// // split()

// const message = 'Welcome to Bahamas';

// console.log(message.split(' '));

// console.log(message.split(''));

// // join()

// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients.join(' '));
// console.log(clients.join(''));
// console.log(clients.join(','));
// console.log(clients.join('-'));

/////// $$ indexOf() and includes() Methods

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.indexOf('Poly'));
// console.log(clients.indexOf('Mango'));

// console.log(clients.indexOf('Ajax'));

// console.log(clients.indexOf('Kiwi'));

// console.log(clients.indexOf('Monkong')); // -1


// // const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false

// //// $$$ Checking multiple conditions with includes()

// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
//   console.log('It is a red fruit');
// }

//// $$$ shift() and unshift() Methods

// const clients = ['Mango', 'Ajax', 'Poly'];

// console.log(clients.shift());
// console.log(clients);

// clients.unshift('Kiwi')
// console.log(clients);

//// Method slice()

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.slice(1, 3));

// console.log(clients.slice(2));
// console.log(clients.slice(0));
// console.log(clients.slice());
// console.log(clients.slice(-2));


//// splice() method

// const scores = [1, 2, 3, 4, 5]

// const deletedScores = scores.splice(0, 3)

// console.log(scores);
// console.log(deletedScores);

// //// $$$ Inserting elements into array


// const colors = ['red', 'green', 'blue'];

// colors.splice(2, 0, 'purple', 'yellow')

// console.log(colors);



// colors.splice(1, 0, 'pink', 'aqua')
// console.log(colors);

//// $$ Replacing array elements

// const languages = ['C', 'C++', 'Java', 'JavaScript'];

// languages.splice(1, 1, 'Python');
// console.log(languages);

// languages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(languages);


//// concat() method

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);
// console.log(oldClients);

// console.log(newClients);

//// $$$ Function expression 

// const add = function (a,b,c) 
// {
//     return a + b + c;

// }

// const result = add(1,2,3)
// console.log(result);

// console.log(add(5, 10, 15));

// const fnA = function () {
//     console.log('[fnA] is start to executing');
//     fnB();
//     console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
// }

// const fnB = function () {
//     console.log('Выполняется [fnB]');

// }
// console.log('Начал выполнение [main]');
// fnA();
// console.log('Продолжил выполняться [main] после выхода из [fnA]');


// const count = function (countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);


//     for (let i = countFrom; i <= countTo; i += step) {
//         console.log(i);

//     }
   
// // }

// // count(1, 5);
// // count(2);
// // count(undefined, 5, 2);


// ////$$ Subarray arguments

// const sum = function () {
//     let total = 0;
//     for (const argument of arguments) {
//         total += argument;
// }

//     return total;
// }
// console.log(sum(1, 2, 3)); //  6
// console.log(sum(1, 2, 3, 4)); //  10
// console.log(sum(1, 2, 3, 4, 5)); //  15

// const fn = function () {
//   // В переменной args будет полноценный массив
//   const args = Array.from(arguments);
// };


// const withdraw = function (amount, balance) {
// //     if (amount === 0) {
// //         console.log('Для проведения операции введите сумму больше нуля.');
// //     } else if (amount > balance) {
// //         console.log('Недостаточно средств на счету.');
// //     } else {
// //         console.log('Операция снятия средств проведена.');
// //     }
// // }



//     if (amount === 0) {
//         console.log('Для проведения операции введите сумму больше нуля.');
//         return
//     }
//     if (amount > balance) {
//         console.log('Недостаточно средств на счету.');
//         return
//     }
//     console.log('Операция снятия средств проведена.');
// };
// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(300, 500);
    

// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(1, 2, 3)); // 6
// print('text'); // text

// function add(a, b, c) {
//   return a + b + c;
// }

// function print(str) {
//   console.log(str);
// }

/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) 

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }


// const clients = ['Mango', 'Poly', 'Ajax'];

// for (let i = 0; i < clients.length; i += 1) {
//     console.log('Logging clients: ', clients[i]);
// }

//  

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//     console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//     console.log(character);
// }

// const clientNameToFind = 'Poly';
// let message;
// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = 'Клиент с таким именем есть в базе данных!';
//         break;
//     }

//     message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message);

// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = 'Клиент с таким именем есть в базе данных!';
//         break
//     }
// }

// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue
//     }
//     console.log(`Число больше чем ${threshold}: ${numbers[i]}`);
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;
// for (let i = 0; i < matrix.length; i += 1) {
//     console.log('Подмассив матрицы matrix[i]: ', matrix[i]);


//     for (let j = 0; j < matrix[i].length; j += 1) {
//         console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//         total += matrix[i][j]
//     }
// }
// console.log(total);


// const message = 'Welcome to Bahamas!';
// console.log(message.split(' '));

// console.log(message.split(''));

// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients.join(' '));
// console.log(clients.join(','));
// console.log(clients.join('-'));


// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// console.log(clients.indexOf('Poly'));
// console.log(clients.indexOf('Monkong'));
// console.log(clients.includes('Poly'));
// console.log(clients.includes('Monkong'));


// const fruit = 'apple';

// if (fruit === 'apple' || fruit === 'strawberry') {
//   console.log('It is a red fruit!');
// }

// const clients = ['Mango', 'Ajax', 'Poly'];

// console.log(clients.shift()); // Mango
// console.log(clients); // ["Ajax", "Poly"]

// clients.unshift('Kiwi');
// console.log(clients); // ["Kiwi", "Ajax", "Poly"]


// const scores = [1, 2, 3, 4, 5]
// const deletedScores = scores.splice(0, 3);
// console.log(scores);
// console.log(deletedScores);


// const colors = ['red', 'green', 'blue'];

// colors.splice(2, 0, 'purple')
// console.log(colors);

// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors);

// const languages = ['C', 'C++', 'Java', 'JavaScript'];
// languages.splice(1, 1, 'Python');
// console.log(languages);

// languages.splice(2, 1, 'C#', 'Swift', 'Go');
// console.log(languages);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClients = oldClients.concat(newClients)
// console.log(allClients);

// console.log(oldClients);

// console.log(newClients);

// const add = function (a, b, c) {
//   return a + b + c;
// };


// const user = {
//     name: 'John',
//     age: 20,
//     hobby: 'tennis',
//     premium: true
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// // const result = [];

// for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
    
// }


// console.log(user);


// Функции

// function multiply(x, y, z) {
//     console.log(`Результат умножения равен ${x * y * z}`);
// }

// console.log('лог до вызова функции multiply');

// console.log('Лог после вызова функции multiply');
// multiply(2, 3, 5);


// function count(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//     for (let i = countFrom; i <= countTo; i += step) {
//         console.log(i);
//     }
// }

// count(1, 5, 2)
// count(2, 4, 2)
// count()
// function multiply() {
//     let total = 0;

//     for (const argument of arguments) {
//         total *= argument;
//     }
//     return total;
// }
// console.log(multiply(1, 2, 3));

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//     return total;
    
// }
// console.log(multiply(1, 2, 3))
// console.log(multiply(1, 2, 3, 4)); //  10
// console.log(multiply(1, 2, 3, 4, 5)); //  15



function includes(array, value) {
  // Change code below this line
for (let i = 0; i < array.length; i += 1) {
  if (i !== value) {
    return true
  } else {
    return false
  }
  }
  // Change code above this line
}
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));