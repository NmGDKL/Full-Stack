// let grandparent = document.getElementById("grandparent-id");
// console.log(grandparent);

//  let parent = document.querySelector("#parent-id");
//  console.log(parent);

// let child = document.getElementsByClassName("child");
// let child = document.querySelectorAll(".child")
// console.log(child);

// let collection = Array.from(child)
//  let liste = document.querySelectorAll("li:nth-child(odd)")

//  liste.forEach(i => {
//       i.style.backgroundColor = "#111";
//       i.style.color = "#fff"
//       i.style.fontsize = "24px"
//  });

//  child.style.backgroundColor = "#111"

//  console.log(liste);

//  let list1 = document.getElementsByName("list2")
// let liste1 = document.querySelectorAll("[name=list2], [class = child]") //iki yöntemlede olur.
// let list1 = document.querySelectorAll("[class=list-li]") //ikiside olur.
// console.log(liste1);

// let child = document.querySelectorAll(".child")[2]

// let child2 = child.parentElement.previousElementSibling.parentElement.children[1].lastElementChild

// console.log(child2);

// let child = document.querySelectorAll(".child")[2]
// let child2 = child.closest(".grandparent")

// console.log(child2);

let liste = document.querySelector("ul")

let newLi = document.createElement("li");
newLi.name = "list2"
newLi.className = "list-li"
// newLi.textContent = "Naim"
let text = document.createTextNode("Ferhat")
newLi.appendChild(newLi)

liste.prepend(newLi)

console.log(newLi);
