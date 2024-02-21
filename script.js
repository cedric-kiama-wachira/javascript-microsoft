// 1.Define a simple function
function helloCedric(){
    console.log("Invoking the function using the function name helloCedric()")
}
console.log(typeof helloCedric);

// 2. Invoke the function
helloCedric();

// 3. Rules for naming a function
/**
 *  _
 * A-Z | a -z
 * $
 * numbers
 */

let a = 100, b = 200, c = 300;

function tester(a) {
    let b = 10;
    console.log(a); // parameter a
    console.log(b); // local variable b
    console.log(c); // global variable c
}

tester(1);        // -> 1
                // -> 10
                // -> 300

console.log(a); // -> 100
console.log(b); // -> 200
console.log(c); // -> 300



let x = 10;

function testin() {
    let x = 20;
}

testin();
console.log(x);

let testers = "testing";

let show = function(){
    console.log(testers);

}

setTimeout(show, 2000);


let sx = 10;
let y = 20;

function testy(y) {
    console.log(y)
}
testy(sx);


function testa(counter){
    console.log("test");
    if (counter > 0)
    testa(--counter);
}

testa(3);


let bx = 10;

function test(){
    let bx = 20;
    console.log(bx)
}

test();