"use strict";
function outer() {
    let name = "outer";
    let str = inner();
    return str;
}

function inner() {
    let name = "inner";
    return "Hello !";
}

console.log("before outer() call");
console.log(outer());
console.log("after outer() call");

console.log("before outer() call");
console.log(outer());
console.log("after outer() call");

const msg = [10, 13,14];
console.log(msg.reverse());

// let a = (n) => {
//     return n > 2 ? n * a(n-1): 2
// let temp = 100;
// temp.forEach(e => min = min > e ? e : min);
// console.log(min)
// }
// a(6);
// console.log(n);

// let cmp = (a,b) =>  a -b ;
// a = [40, 10, 30, 20, 50];
// a.sort(cmp);


let x = 3e-3;

console.log(x);

let colors = ['red', 'green', 'blue']
for (let c of colors) console.log(c);

let msg1 = 'hello';
let msg2 = msg1.slice(-1);
console.log(msg2 ? msg2 : msg2 + msg1);

let a1 = true && 20;
let b1 = 0 || 20;
let c1 = 0 && 20;
console.log(`${a1} ${b1} ${c1}`);

let route = {distance:131, elevation: 1.4}
for (let k in route) console.log(k);

// let test = prompt("Run", "Code");

let a2 = 20 + "10";
let b2 = 20 + + "10";
let c2 = 20 + -"10" + "10";
let d2 = "10" - "10" + "100";
let e2 = "A" - "B" + 0XA;
console.log(`${a2}, ${b2}, ${c2}, ${d2}, ${e2}`)

// let mult = 1;
// let x3 = mult(2)(10);
// console.log(x3);

let x4 = false || true;
let y4 = "true" && "false";
let z4 = false && true;
console.log(`${x4} ${y4} ${z4}`);

let colors5 = ['red', 'green', 'blue'];
for(let c of colors5) console.log(c);

let route5 = {distance: 131, elevation:1.4};
for (let k in route5) console.log(k);

let animals = ["canary", "dog", "cat"];
animals.push("hamster");
console.log(animals);

for (let a = 5; a > 2; a--){
    console.log(a);
}


let x5 = [10,20,30,40];
let y5 = [50,60];
x5.reverse().push(y5);
console.log(x5.length);

let z5 = '\{ x \}'
console.log(z5);