// // 1.Define a simple function
// function helloCedric(){
//     console.log("Invoking the function using the function name helloCedric()")
// }
// console.log(typeof helloCedric);

// // 2. Invoke the function
// helloCedric();

// // 3. Rules for naming a function
// /**
//  *  _
//  * A-Z | a -z
//  * $
//  * numbers
//  */

// let a = 100, b = 200, c = 300;

// function test(a) {
//     let b = 10;
//     console.log(a); // parameter a
//     console.log(b); // local variable b
//     console.log(c); // global variable c
// }

// test(1);        // -> 1
//                 // -> 10
//                 // -> 300

// console.log(a); // -> 100
// console.log(b); // -> 200
// console.log(c); // -> 300



// let x = 10;

// function test() {
//     let x = 20;
// }

// test();
// console.log(x);

// let test = "testing";

// let show = function(){
//     console.log(test);

// }

// setTimeout(show, 2000);


// let x = 10;
// let y = 20;

// function test(y) {
//     console.log(y)
// }
// test(x);


// function test(counter){
//     console.log("test");
//     if (counter > 0)
//     test(--counter);
// }

// test(3);


let x = 10;

function test(){
    let x = 20;
    console.log(x)
}

test();