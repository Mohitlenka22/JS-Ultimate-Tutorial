"use strict";

/* 
    var vs let vs const:
    -> var keyword is used to declare global scoped variables.
    -> var Variables can be updated also re-declared.
    -> let keyword is used to declare blocked-scoped variables.
    -> let Variables can be updated but not re-declared.
    -> const Variables can't be updated but not re-declared.(basically used to declare constants)
*/

// var
var a = 12;
var a = "Mohit"; // re-declaring not throws error
console.log(a); // Mohit

//let
let b = true;
b = false; // re-declaring throws error
console.log(b); // false

//block
{
    var a = 100;
    console.log(a); // 100
    let b = "Hello world";
    console.log(b); // Hello world
}
console.log(a); //100 -> due global scope values changed.
console.log(b); //false -> block-scope


//const 

const c = 123;
// c = 12; // Throws an error
console.log(c);