//Expressions
/* 
This is all are valid javascript expressions & a valid program
*/
7;
"Hello";
true;
null;
undefined;


//Operators

//Arithmetic operators
let a = 5;
let b = 7;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a ** b = ", a ** b);
console.log("a % b = ", a % b);

let c = 11;
console.log("++c = ", ++c);
console.log("c++ = ", c++);
console.log("--c = ", --c);
console.log("c-- = ", c--);
console.log("c = ", c);

//Assignment operators
let d;
d = 5;
d += 5; // d = d + 5
d -= 5; // d = d - 5
d *= 5; // d = d * 5
d /= 5; // d = d / 5
d **= 5; // d = d ** 5
d %= 5; // d = d %5
console.log("d = ", d);

//Comparisom operators
let e = 6;
let f = '6';
console.log(e == f); //compares value but not type 
console.log(e != f); //compares value but not type 

console.log(e === f); //compares both value and type 
console.log(e !== f); //compares both value and type 

console.log(e > f);
console.log(e >= f);
console.log(e < f);
console.log(e <= f);

//Logical Operators

let x = 12;
let y = 10;

console.log(x < y && x !== y) //returns true if both expressions are true else returns false
console.log(x > y || x !== y) //returns false if any of both expressions are false else returns true
console.log(!false);

//Ternary Operator

let age = 19;
console.log("You can", (age >= 18 ? "vote." : "can't vote."));
