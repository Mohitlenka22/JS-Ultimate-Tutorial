// let first = document.getElementsByTagName('div');// returns a HTML collection
// console.log(first)
// Array.from(first).forEach(e => e.style.color = 'blue')
// let first_0 = first[0]
// console.log(first_0)

// let names = document.getElementsByName('footer'); //based on name attribute
// console.log(name)

// let classes = document.getElementsByClassName('new_1');
// console.log(classes)

let newcls = document.getElementById("h");
console.log(newcls.classList);
// console.log(newcls)
newcls.addEventListener("click", () => {
  if (newcls.style.color == "red") newcls.classList.toggle("new_1");
  else newcls.classList.toggle("new_2");
});

//querySelector & querySelectorAll
let div = document.querySelector("#dd"); //takes CSS Selector
// console.log(div)
div.style.color = "red";

let Alldivs = document.querySelectorAll("div");
console.log(Alldivs[0]);
