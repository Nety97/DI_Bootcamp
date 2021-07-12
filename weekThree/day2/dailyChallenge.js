// // exercise 1
// //1
// let remov = document.getElementsByTagName("article")[0].lastElementChild
// remov.remove();
// //2
// let titleh2 = document.getElementsByTagName("h2")[0]
// titleh2.addEventListener("click", changeColor);
// function changeColor(event) {
//     titleh2.style.background = "red"
//     console.log(event)
// }
// //3
// let randomNum = Math.floor(Math.random() * 101)
// let titleh1 = document.getElementsByTagName("h1")[0]
// titleh1.style.fontSize = randomNum+"px";
// //4
// let titleh3 = document.getElementsByTagName("h3")[0]
// titleh3.addEventListener("click", hide)
// function hide() {
//     titleh3.style.display = "none"
// }
// //5
// let bod = document.body
// function bold(event) {
//     bod.style.fontWeight = "bold"
// }
// //6
// let formData = document.getElementsByTagName("form")[0].elements
// console.log(formData)
// let btnSubmit = document.getElementsByTagName("form")[0].elements[2]
// btnSubmit.addEventListener('click', submit)
// function submit(event) {
//     for (let index = 0; index < formData.length -1; index++) {
//         let trueData = formData[index].value
//         console.log(trueData)
//         event.preventDefault()
        
        
//     }
// }
// // let table = document.getElementsByClassName("usersAnswer")
// // table.createElement("table")




// //7
// let secondP = document.getElementsByTagName("p")[1]
// secondP.addEventListener("click", fadein)
// function fadein(event) {
//     console.log(event)
//     secondP.classList.add("fade-out")   
// }

//exercise 2

// let a = document.getElementsByTagName("strong")

// for (let index = 0; index < a.length; index++) {
//     // let b = a[index].textContent;
//     a[index].addEventListener("mouseover", highlight)
//     a[index].addEventListener("mouseout", return_normal)

//     function highlight() {
//         a[index].style.color = "blue"
        
//     }
//     function return_normal() {
//         a[index].style.color = "black"
//     }
// }
// function getBold_items() {
//     let x = document.querySelectorAll('strong');
//     console.log(x)
//     x.addEventListener('mouseover', highlight)
//     x.addEventListener('mouseout', return_normal)

// }
// function highlight() {
//     x.style.color = "red"
// }
// function return_normal() {
//     x.style.color = "black"
// }
// getBold_items();
// a.addEventListener("mouseover", highlight)
// function highlight() {
//     a.style.color = "blue"
// }


// exercise 3 and 4

let n = document.querySelector("p")
n.addEventListener("mouseover", lol)
n.addEventListener("click", lol3)
function lol(event) {
    n.style.color = "red"
    n.style.background = "blue"
    n.style.fontSize = "70px"
    console.log(event)
}
function lol3(event) {
    n.style.fontSize = "15px"
    m.style.color = "orange"
    
}
let m = document.querySelector("label")
m.addEventListener("mouseover", lol2)
function lol2(event) {
    m.style.fontSize = "46px"
    n.style.color = "purple"

}
let f = document.getElementById("submit")
f.addEventListener("click", math)

function math(event) {
    let g = document.getElementById("radius")
    let h = g.value 
    let pi = 3.141592653589793;
    let j = 4/3 * pi * Math.pow(h, 3)
    console.log(j)
    event.preventDefault()
}
