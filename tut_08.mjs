//functions -> set of statements executed and can be used again and again.

function add(x, y) {
    return x + y;
}
console.log(add(1, 2));

function Avg(x, y) {
    return (x + y) / 2;
}
console.log(Avg(1, 2));

//Arrow functions

const sum = (x, y) => {
    console.log("x + y = ", x + y);
}
sum(3, 678);

const PlusOneAvg = (a, b) => {
    return 1 + (a + b) / 2;
}
console.log("PlusOneAvg(17, 67) = ", PlusOneAvg(17, 67));