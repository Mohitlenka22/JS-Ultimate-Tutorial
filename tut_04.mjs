/*
Primitive Datatypes: nn bb ss u
->null
->Number
->boolean
->BigInt
->string
->symbol
->undefined
*/

let a = null;
let b = 12;
let c = true;
let d = BigInt("123456788901983712986748648");
let e = "Mohit";
let f = Symbol("This is JS.");
let g = undefined;

console.log(a, b, c, d, e, f, g);

/*
Non-Primitive datatype -> Objects
*/
const Details = {
    "Name": "Mohit", //Key may or may not be declared using string literal.
    Roll: 12,
    isPass: true
}
console.log(Details);
console.table(Details);
console.log(Details['Name']);
console.log(Details.Name);

//try to change Details type
// Details = 12; //throws an error
Details["friend"] = "sandeep"; // We are just changing object but not (Details variable)->type
Details["Name"] = "mohit";
console.table(Details);

