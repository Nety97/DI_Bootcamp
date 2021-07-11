//exercise 1

// let a = document.getElementById("navBar");
// a.setAttribute("id","socialNetworkNavigation")
// console.log(a)
// let c = document.createElement("li")
// c.appendChild(document.createTextNode("Logout"))
// console.log(c)
// let b = document.getElementById("list1")
// //'another way' let b = document.body.chidren[0].firstElementChild
// b.appendChild(c)
// console.log(b)

// console.log(b.firstElementChild.textContent)
// console.log(b.lastChild.textContent)

//exercise 2

// let e = document.body.children[1].lastElementChild;
// e.innerHTML = "Richard"

// let f = document.getElementsByClassName('list')
// for (let index = 0; index < f.length; index++) {
//     f[index].firstElementChild.textContent = "Nety"    
// }
// for (let index = 0; index < f.length; index++) {
//     let listas = document.createElement("li")
//     let z = document.createTextNode("Hey students")
//     listas.appendChild(z)
//     f[index].appendChild(listas)
// }
// let y = f[1].children[1];
// console.log(y)
// f[1].removeChild(y)

// for (let index = 0; index < f.length; index++) {
//     f[index].classList.add("student_list")
    
// }
// f[1].classList.add("university","attendance")




//exercise 3


// document.body.children[1].style.backgrounColor = "red"
document.body.children[0].style.backgroundColor = "lightblue";
document.body.children[0].style.padding = "40px";
document.body.children[1].children[0].style.display = "none";
document.body.children[1].children[1].style.border = "thick dotted red";
document.body.style.fontSize = "50px";

if (document.body.children[0].style.backgroundColor = "lightblue") {
    alert("Hello John and Pete")
}