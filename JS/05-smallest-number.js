/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number > smallestNumber) {
        smallestNumber = number;
    }
}

console.log('smallestNumber: ', smallestNumber);


const findLongestWord = function (str) {
    
    
  let arrStr = str.split(' ');
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < arrStr.length; i += 1) {
    wordLength = arrStr[1].length;

    if (arrStr[i].length > wordLength) {
      longestWord = arrStr[i];

      return longestWord;
    }

  }
};
