"use strict";
const namesSet = ["Yusuf", "Moses", "Roland"];

// While Loops
console.log("1.While loops section");
console.log("----------------------");
console.log("While loop section")
let indexOne = 0;
while (indexOne < namesSet.length){
    const nameSetOne = namesSet[indexOne];
    console.log(`Mr.${nameSetOne} is on the day shift serving us hot chocolate.`);
    indexOne++
};

// For Loop
console.log("2.For loops section");
console.log("-------------------");
for (let  indexTwo = 0; indexTwo < namesSet.length; indexTwo++ ){
    const nameSetTwo = namesSet[indexTwo];
    console.log(`Mr.${nameSetTwo} are serving us cakes and totilas.`);
}; 

// For ... Of Loop
console.log("3.For...of loops section");
console.log("-------------------------");
for(let nameSetThree of namesSet){
    console.log(`Mr.${nameSetThree} are warm and friendly.`);
};

