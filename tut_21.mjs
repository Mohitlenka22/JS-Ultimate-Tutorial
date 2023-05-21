//setTimeout && setInterval
// setTimeout -> runs the javascript code after the specified time.
// setInterval -> runs the javascript code repeatedly for the given time.

let Timer_id = setTimeout(function(){
    alert("Hello")
}, 2000);

console.log(Timer_id);

//To cancel the setTimeout we use clearTimeout and pass Timer_id to it
clearTimeout(Timer_id);

let a = setInterval(function(){
    alert("This is setInterval")
}, 3000);

clearInterval(a);