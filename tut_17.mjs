let new_1 = document.getElementsByClassName("new_1")[0];
console.log(new_1);
console.log(new_1.matches("div")); //returns false
console.log(new_1.matches("h1")); //returns true

// let dd = document.getElementById("hh")
// console.log(new_1.closest(dd))

let first = document.getElementById("first");
console.log(first);
console.log(first.contains(new_1));

console.log(new_1.innerHTML);
console.log(new_1.outerHTML);

let TextNode = document.body.firstChild;
console.log(TextNode.data);
console.log(TextNode.nodeValue);

let time = document.getElementById("time");
setInterval(() => {
  let date = new Date();
  let Hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  time.innerHTML = `<i>${Hours}:${minutes}:${seconds}</i>`;
}, 1000);
