"use strict";

// Normal Version
const statusMessageOne = 200;

if(statusMessageOne === 200) {
    console.log("Normal 200!");
} else if(statusMessageOne === 400){
    console.log("Something is wrong and we have to check it out.");
} else {
    console.log("Not sure what the problem could be.");
};

// Terse Version
const statusMessageTwo = 400;

if(statusMessageTwo === 400) console.log("Normal 400!");
else if(statusMessageTwo === 600) console.log("Something is wrong and we have to check it out.");
else  console.log("Not sure what the problem could be.");

// Ternary Version
const statusMessageThree = 600;
let message = (statusMessageThree === 600) ? "Normal 600!" : "Something is wrong and we have to check it out.";
console.log(message);