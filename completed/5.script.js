"use strict";
//
//instanceof
//typeof
// let counter = 100;
// console.log(counter); // -> 100
// {
//   let counter = 200;
//   console.log(counter); // -> 200
// }
// console.log(counter); // -> 100

// let x ='abcdefg'.slice(2);
// console.log(x);
// let animal = ["dog","cat", "hamster"]
// animal.shift();
// console.log(animal);
// let x = 2e4;
// console.log(x);

let height = 180;
{
  let height = 200;
  height = height+ 10;
}
console.log(height);