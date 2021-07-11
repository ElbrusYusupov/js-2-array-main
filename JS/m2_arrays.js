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

const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

console.log(clients.indexOf('Poly'));
console.log(clients.indexOf('Mango'));

console.log(clients.indexOf('Ajax'));

console.log(clients.indexOf('Kiwi'));

console.log(clients.indexOf('Monkong')); // -1


// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

console.log(clients.includes('Poly')); // true
console.log(clients.includes('Monkong')); // false

//// $$$ Checking multiple conditions with includes()

// Выносим варианты в массив
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
const fruit = 'cherry';

if (redFruits.includes(fruit)) {
  console.log('It is a red fruit');
}