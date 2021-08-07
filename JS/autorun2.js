
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


ffunction findLongestWord(string) {
  // Change code below this line


  let array = string.split(' ')
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < array.length; i += 1) {
    wordLength = array[1].length;

    if (array[i].length > wordLength) {
      longestWord = array[i];
      return longestWord;
    }
     
  }
  return longestWord;

  // Change code above this line
}