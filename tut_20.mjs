//classList property.
let first = document.getElementById("first");
console.log(first.className);

//classList
console.log(first.classList);
let a = first.classList;

a.add("con3");
a.remove("con2");

a.toggle("con3");

console.log(a.contains("con1"));
