// exercise 1
let cubeMove = document.getElementById('animate')

let left = 0;
let inter;
function muevelo(){
    left += 5
    cubeMove.style.left = left+ 'px'
    if (left >= 350) {
        clearInterval(inter)
    }
}
myMove = () =>{
    inter = setInterval(muevelo, 200)
}


//exercise 2

const dragBox = document.getElementById("smallBox")
const areaDrag = document.getElementById("bigBox")
console.log(dragBox)
console.log(areaDrag)

dragBox.addEventListener("dragstart", dragStartFunc)
areaDrag.addEventListener("dragover", dragOverFunc)
areaDrag.addEventListener("drop", dropFunc)

function dragStartFunc(e){
    console.log("drag")
}
function dragOverFunc(e) {
    e.preventDefault()
    areaDrag.classList.add("over")
    console.log("over")
}
function dropFunc(e) {
    console.log('drop')
    e.target.appendChild(dragBox)
    areaDrag.classList.remove("over")
}