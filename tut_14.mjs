// DOM manipulation
/*
    There are mainly three types of Nodes.
    1.text Node - text or content in page.
    2.Element Node - html tags or elements.
    3.comment Node - comments in your document.
*/
console.log(document)
//document.body is used access of body of ur html page
console.log(document.body)
//document.documentElement used to access the html tag/Node
console.log(document.documentElement);
//document.head
console.log(document.head);
document.body.style.color = "blue";

// Children in DOM
// elements / Nodes which are directly or deeply nested under other tags/elements are called children.
// elements to which current nodes/elements are nested/belong to  are called as Parent Nodes
// elements/Nodes belong to same parent are known as Siblings.

//we have some Methods to access the children
//1. firstChild
console.log(document.body.firstChild) // doesn't give h1 as element, it considers the space as textNode.
//1. lastChild
console.log(document.body.lastChild)
//1. childNodes
console.log(document.body.childNodes) // returns a DOM collection not an Array
//we use Array.from
let arr = Array.from(document.body.childNodes);
console.log(arr);
arr.forEach( e => {
    console.log(e);
})
arr[1].style.color = "red";
console.log(arr[1].className);

//Parents & siblings
console.log(document.body.parentNode); // returns any Node of three types
console.log(document.body.parentElement); // returns only html elements

console.log(document.documentElement.parentNode); // returns document Node
console.log(document.documentElement.parentElement); // returns null

console.log(document.body.previousSibling);
console.log(document.body.nextSibling);

//Element-Only navigation
//This mainly focuses how prevent of getting textNodes due to spaces
//we use same methods , simply change or add Element to every attribute

//1. firstElementChild
console.log(document.body.firstElementChild); // doesn't give h1 as element, it considers the space as textNode.
//1. lastElementChild
console.log(document.body.lastElementChild);
//1. children
console.log(document.body.children); // returns a DOM collection not an Array

//Parents & siblings
let a = document.body.firstElementChild;
console.log(a.parentElement); // returns only html elements

console.log(a.previousElementSibling);
console.log(a.nextElementSibling);
