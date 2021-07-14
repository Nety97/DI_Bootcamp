let barColor = document.getElementById("colorPickerBar")
let colors =  [     "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
                    "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
                    "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00"]

for (let index = 0; index < colors.length; index++) {
    let divs = document.createElement("div")
    divs.style.backgroundColor = colors[index]
    barColor.appendChild(divs)
    divs.addEventListener("click", pickColor)
}
let asignedColor;
function pickColor(e) {
    console.log(e)
    asignedColor = e.target.style.backgroundColor
    console.log(asignedColor)
}

let divs2;
let arrayDiv = [];
let mouse = false;
let canvasdiv = document.getElementById("paintCanvas")
for (let index = 0; index < 24 *60 * 2; index++) {
    divs2 = document.createElement("div")
    divs2.style.border = "1px solid black"
    divs2.style.backgroundColor = "white"
    canvasdiv.appendChild(divs2)  
    divs2.addEventListener("mousedown", fullColor)
    divs2.addEventListener("mouseover", keepColor)
    divs2.addEventListener("mouseup", stopColor)
    arrayDiv.push(divs2);
}
function fullColor(e) {
    console.log("h")
    console.log(e.target)
    e.target.style.backgroundColor = asignedColor;
    mouse = true  
}
function keepColor(e) {
    if (mouse == true) {
        e.target.style.backgroundColor = asignedColor;
    }
}
function stopColor(e) {
    mouse = false
}


function clearAll() {
    console.log(divs2)

    for (let index = 0; index < arrayDiv.length; index++) {
        arrayDiv[index].style.backgroundColor = "white"

    }
}