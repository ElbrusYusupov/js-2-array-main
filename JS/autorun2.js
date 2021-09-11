
// 1/36

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const normMessage = message.toLowerCase();
//   if (normMessage.includes('spam')) {
//     result = true;
//   } else if (normMessage.includes('sale')) {
//     result = true;
//   }else {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }


// // 2/11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// let total = 0;
// let array = message.split(' ');
//   total = array.length * pricePerWord;
  
//   return total
  


//    // Change code above this line
// }

// // 2/12

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
// 	string = array.join(delimeter)


//   // Change code above this line
//   return string;
// }


// // 2/16 

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// let array = firstArray.concat(secondArray);
//   if (array.length > maxLength) {
// 	array = array.slice(0, maxLength)
//     return array
//   	}
//   return array

//     // Change code above this line
// }
  
// // 2/20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (const value of order) {
//     total += value;
// }
//   // Change code above this line
//   return total;
// }


// ffunction findLongestWord(string) {
//   // Change code below this line


//   let array = string.split(' ')
//   let wordLength = 0;
//   let longestWord;

//   for (let i = 0; i < array.length; i += 1) {
//     wordLength = array[1].length;

//     if (array[i].length > wordLength) {
//       longestWord = array[i];
//       return longestWord;
//     }
     
//   }
//   return longestWord;

  // Change code above this line
// }

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers = numbers[i]
  }
     
  // Change code above this line
  return numbers;
}
// console.log(numbers);

console.log(createArrayOfNumbers(1, 3));


// 2/22

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
	for (let i= min; i <= max; i += 1)
      numbers.push(i);
  // Change code above this line
  return numbers;
}


// 2/23 
function filterArray(numbers, value) {
   // Change code below this line
	const num = []
  let array = 0;
  
  for (let i = 0; i < numbers.length; i += 1)
    if (numbers[i] > value) {
      array = numbers[i].length;
      num.push(numbers[i]);
    }
  return num

  // Change code above this line
}


// 2/24

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}

// 2/25

function getCommonElements(array1, array2) {
  // Change code below this line
const arrey = [];
    for (let i = 0; i < array1.length; i += 1) {
        if (array2.includes(array1[i])) {
            arrey.push(array1[i]);
        }
    }
    return arrey;


 // Change code above this line
}


// 2/26

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  //  for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }


  for (const element of order) {
    
    total += element;
  }

  // Change code above this line
  return total;
}

2 / 27

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  // for (let i = 0; i < numbers.length; i += 1) {
  //   const number = numbers[i];
    
    for (const number of numbers) 

    if (number > value) {
      filteredNumbers.push(number);
    
  }

  return filteredNumbers;
  // Change code above this line
}
