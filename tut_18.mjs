//Attribute Methods
let first = document.getElementById("first");
console.log(first.hasAttribute("id"));
console.log(first.hasAttribute("style"));

let attr = first.getAttribute("id");
console.log(attr);

first.setAttribute("class", "new_1");
console.log(first.attributes);
first.removeAttribute("class");

//Html Insertion Methods
let str = "This is JavaScript Tutorial.";
first.firstElementChild.innerHTML += str;

//There many other ways to do it
//we have appendChild, append, prepend, before, after, replaceWith
//To create a Element using Js we use createElement method

let div = document.createElement("div");
div.innerHTML = "This is Awesome.";
// first.append(div);
// first.appendChild(div);
// first.prepend(div);
// first.before(div);
// first.after(div);
first.replaceWith(div); //replaces entire element with given element.
