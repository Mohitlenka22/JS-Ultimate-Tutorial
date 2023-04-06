//Array methods

let num = [1, 2, 3, 4, 5];

console.log(num.toString());
console.log(num.join('-'));


console.log(num.push(10)); //Modifies original array
console.log(num);
console.log(num.pop()); //Modifies original array
console.log(num);

console.log(num.shift()); //removes first element returns removed element
console.log(num);

console.log(num.unshift(12)); //add element at 1st position modifies original array
console.log(num);

// delete operator
console.log(num.length);
delete num[0];
console.log(num); // [ <1 empty item>, 2, 3, 4, 5 ] just unbinds that item but doesn't deallocate memory / length doesn't affect
console.log(num.length);

let num2 = [2022, 3044, 567]
let newNum = num.concat(num2); //creates a new Array
console.log(newNum);

//sort
let arr = [1, 3, 14, 56, 5556, 32, 21]
arr.sort(); //sorts array in alphabetical order and modifies original array
console.log(arr);

//To sort as per requires sort() takes compare function

const compare = (a, b) => {
    // sorts in ascending order
    return a - b;
}
arr.sort(compare);
console.log(arr);

//reverse
arr.reverse();
console.log(arr);

//slice, splice
console.log(arr.slice(1, 4)); // returns array from slice(start, stop), stop is exclusive , if stop mentoined then it goes upto last
console.log(arr.slice(3));
console.log(arr);

arr.splice(1, 3); // deletes from start upto given no. of values & modifies original array => splice(start, value), returns deleted elements
console.log(arr);
//we can also add new elements using splice
arr.splice(1, 2, 22, 34);
console.log(arr);

//forEach
let numbers = [1, 2, 3, 5, 6, 7];
numbers.forEach((value, index, array) => {
    console.log(value * value, index, array);
});
console.log(numbers)// doesn't modifies / returns array

//map

let Newnumbers = numbers.map((value, index, array) => {
    console.log(value * 2);
    return value * 2;
});//modifies & returns new array.
console.log(Newnumbers);

let Newnumbers2 = numbers.map((value, index, array) => {
    console.log(value * 2);
    return value > 2;
});
console.log(Newnumbers2);

//filter

let filterednum = numbers.filter((value, index, array) => {
    return value > 5;
});
console.log(filterednum);

//forEach & map are used to perform operations on elements if u use comditions they return true or false
//filter returns elements which satify the condition.


//reduce

let res = numbers.reduce((prevValue, currValue) => {
    return prevValue + currValue;
});// returns a single value;
console.log(res);