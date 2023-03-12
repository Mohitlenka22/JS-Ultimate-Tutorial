//for loop

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//for in loop -> loop through keys of objects & when used with iterable returns indices.
let obj = {
    mohit: 0b100, //binary literal 0b
    harry: 0o123, //Octal literal 0o
    sandeep: 0x465 //Hexadecimal literal
}

for (let i in obj) {
    console.log(i, obj[i]);
}

//for of loop -> used to iterate over a iterable like strings, arrays.
for (let s of "Mohit") {
    console.log(s);
}

let arr = new Array(1, 2, 3)
for (let a in arr) {
    console.log(arr[a]);
}
for (let a of arr) {
    console.log(a);
}

//while loop
let x = 9; //initialization
while (x < 20) {
    console.log(x);
    x++;
}

//do-while
let y = 9; //initialization
do {
    /* code will be executed atleast once */
    console.log(y);
    y++;
} while (y < 20); //condition is checked after executing block
