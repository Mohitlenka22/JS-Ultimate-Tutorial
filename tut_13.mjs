/*
We Basically have Three objects in js
1.DOM --> document object model == the html document is represented in js as an object, we can manipulate it using various methods
2.BOM --> Browser Object model == allows more functions like alert, prompt, confirm methods
3.Jscore

In  javaScript there is a global object 'window'.
-->Everything in js is under the window object.
*/

//alert --> show a message on the window

// let a = alert("Hey, there!");// doesn't return anything.
// console.log(a);//returns undefined

//prompt

// let name = prompt("What's your name?","stranger");
// console.log(name);

//confirm

// let ret = confirm("Are you sure?");
// console.log(ret); // returns true or false

// console.log(window);
//DOM in js is 'document'
// console.log(document.querySelector("h1"));

const video = document.getElementById("video");
const script = document.querySelector("script");
console.log(script.src);

try {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
  video.play();
  console.log(stream);
} catch (error) {
  console.log(error.message);
}
