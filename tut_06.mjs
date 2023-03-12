//if.. else if.. else..

let age = '13';
age = Number.parseInt(age);

if (age < 0) {
    console.log("Invalid age.");
}
else if (age > 0 && age < 18) {
    console.log("You can't vote because age is less than 18.");
}
else {
    console.log("You can vote because age is greater than 18.");
}


// Switch case 

let a = 10;
let b = 11;
let op = '+'

switch (op) {
    case '+':
        console.log("a + b = ", a + b);
        break;
    case '-':
        console.log("a - b = ", a - b);
        break;
    case '*':
        console.log("a * b = ", a * b);
        break;
    case '/':
        console.log("a / b = ", a / b);
        break;
    default:
        console.log("Enter valid operator");
}