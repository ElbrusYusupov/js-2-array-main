// Empty array

// const arr = [];


// // 'clients'  array with three elements
// const clients = ['Mango', 'Poly', 'Ajax'];

// console.log(clients);

//// $$$$ Overriding

const clients = ['Mango', 'Poly', 'Ajax'];

// clients[0] = 'Kiwi';
// console.log(clients[0]);

// clients[3] = 'Alex';

// console.log(clients[3]);

// console.log(clients);

//// $$$ Length of array 

// clients.length = 5;
// console.log(clients.length);
// console.log(clients);
// console.log(clients[4]);

// clients.length = 2;
// console.log(clients);

//// $$$ Iteration into array

// for (let i = 0; i < clients.length; i += 1) {
//     console.log(clients[i]);
// }

// // Using a loop, the array can be filled with data
// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//     numbers.push(`label-${i}`);
// }
// console.log('numbers: ', numbers);


// //// $$ Loop for...of

// // iteration into array 

// for (const client of clients) {
//     console.log('Logging clients: ', client);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

//// &&&& Instruction 'break' and 'continue'


const clientNameToFind = 'Poly';

let message = 'There is not a customer with this name in the database!';

for (const client of clients) {
/*
   * На каждой итерации мы будем проверять совпадает ли элемент массива с
   * именем клиента. Если совпадает то мы записываем в message сообщение
   * об успехе и делаем break чтобы не искать дальше
   */

    if (client === clientNameToFind) {
        message = 'There is a customer with this name in the database!';
        break;
    }

    

}

console.log(message);

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < threshold) {
        continue;
    }
    console.log(`The number greater than ${threshold}: ${numbers[i]}`);
}


const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(matrix[0].length);
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
  console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
    total += matrix[i][j];
  }
}

console.log(total); // 45