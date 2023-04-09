import axios from 'axios';

console.log(console);
/*
Basically we use following functions of console object
->log == logs out the message to the console
->error
->warn
->table == used to print the object in tabular format
->time & timeEnd used to print time taken by process between them
->assert == if statement is true it doesn't do anything else throws an error
->info == work's same as log
->clear == clears the console.
*/
console.error("This is an error");
console.warn("Hey, you are not allowed to visit this");
let obj = {
    a: 1,
    b: 2,
    c: 3
}
console.table(obj);

console.assert(5 > 1); //takes an expression only.
console.assert(5 < 1); //takes an expression only.
console.info("This is important information");


console.time("process");
// const res = await fetch("https://www.google.com", {
//     method: "GET",
//     headers: {
//         "Content-type": "application/json"
//     }
// });
const res = await axios.get("https://www.google.com", {
    withCredentials: true,
    responseType: "application/json"
});
console.log(res);

console.timeEnd("process");