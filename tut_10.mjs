/*
Arrays - The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
*/

let a = [1, 2, 3, 4];
console.log(a);
console.log(typeof a);

let items = [12, "pen", false, null]; // Array can have collection of different types.
console.log(items);
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
console.log(items[4]); //undefined as it's value is not defined.

///Another way is by using Array class.
let arr = new Array(1, 2, 3, "pen");
console.log(arr);
console.log(typeof arr);

arr[1] = "pencil"; //Arrays are mutable.
console.log(arr);

//length property
console.log(arr.length);

//Array can printed using loops
for (let i of arr) {
    //for of loop => loops through values of array.
    console.log(i);
}
for (let i in arr) {
    //for in loop => loops through indices of array.
    console.log(i, arr[i]);
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}