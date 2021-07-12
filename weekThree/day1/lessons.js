//Lesson1
// //div
// let a = document.body.children[0]
// let b = document.body.firstElementChild

// // ul
// let c = document.body.children[1]
// let d = document.body.children[0].nextElementSibling

// //li
// let e = document.body.children[0].nextElementSibling.children[1]
// let f = document.body.children[1].lastElementChild


//lesson2
//div
document.body.children[0]
document.body.firstElementChild
document.getElementById("container")


const uls = document.querySelectorAll('ul.list')
const sameUls = document.getElementsByClassName('list');
​
// 2.1
for (const ul of uls) {
    for (const li of ul.children) {
        console.log(li.textContent)
    }
}
console.log('-----------------')
​
// 2.2
for (const ul of sameUls) {
    for (const li of ul.children) {
        console.log(li.textContent)
    }
}
console.log('-----------------')
​
// 3
const firstUlFirstLi = uls[0].children[0]
const secondUlFirstLi = uls[1].children[0]
​
const sameFirstUlFirstLi = document.querySelector('ul.list li')
const sameSecondUlFirstLi = uls[1].querySelector('li')
​
console.log(firstUlFirstLi === sameFirstUlFirstLi)
console.log(secondUlFirstLi === sameSecondUlFirstLi)