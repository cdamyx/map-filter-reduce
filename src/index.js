// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (x) {
//   return x < 10;
// });

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// const sumNumbers = numbers.reduce(function (accumulator, currentNumber) {
//   return (accumulator += currentNumber);
// });

// console.log(sumNumbers);

//Find - find the first item that matches from an array.

// console.log(numbers.find(function(x){
//   return x > 5;
// }));

//FindIndex - find the index of the first item that matches.

// console.log(
//   numbers.findIndex(function (x) {
//     return x > 5;
//   });
// );

import emoji from "./emojipedia";

// console.log(emoji);

const newEmoji = emoji.map(function (x) {
  return x.meaning.substring(0, 100);
});

console.log(newEmoji);
