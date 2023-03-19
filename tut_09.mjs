//Strings Introduction

let name = 'mohit'; //allows to use double quotes inside string
name = 'mohit\'';
console.log(name.length); // escape character backslash doesn't count

name = "mohit'";//allows to use single inside string
console.log(name);

/*
JavaScript string interpolation
String interpolation in JavaScript is a process in which an expression is inserted or placed in the string. To insert or embed this expression into the string a template literal is used.
*/
let $frnd = "Mohit";
let sentence = `My name is ${$frnd}`;
console.log(sentence);

//String Methods & properties

let $name = "Mohit";
console.log($name[0]);
console.log($name[1]);
console.log($name[2]);
// $name[0] = "m"; //thow an error because strings are immutable.
console.log($name.length);
console.log($name.toUpperCase());
console.log($name.toLowerCase());
console.log($name.concat(" Pavan ", "Kalyan"));
console.log($name.slice(0, 3)); //takes start, stop as params with stop exclusive.
console.log($name.slice(1)); //consider 1 as start and goes upto end of string as stop mentioened.
console.log($name.replace("t", "T"));
$name = $name.replace("t", "T")
console.log($name.includes("ohi")); // returns true if it contains in string else false
console.log($name.startsWith("M"));
console.log($name.endsWith("T"));
console.log($name.charAt(3));

let sentence2 = "    This is a JavaScript language    ";
sentence2 = sentence2.trim(); // removes extra spaces from start and end of a string.
let a = sentence2.split(" ");//converts a string into array by separating at given separator
console.log(a);
console.log(sentence2.substring(0, 5));

console.log(typeof sentence2); //string

let s = new String("Hello world");
console.log(typeof s);//object of string class