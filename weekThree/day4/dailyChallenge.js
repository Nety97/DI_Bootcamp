let inputValue = document.getElementById("input");
inputValue.addEventListener("keyup", value);
let text;
function value(e) {
    text = inputValue.value
}
let list = document.getElementById("listDad")
let icon;
let checkButton;
let liList;
function submit() {
    // console.log(text)
    if (!inputValue.value == "") {
        icon = document.createElement("i")
        icon.setAttribute("class", "far fa-times-circle")
        checkButton = document.createElement("input") 
        checkButton.setAttribute("type","checkbox")
        liList = document.createElement("li")
        liList.textContent = text
        // liList.setAttribute(text)
        list.appendChild(icon)
        list.appendChild(checkButton)
        list.appendChild(liList)
        inputValue.value = ""
    }
}

// let plist;
// let listmain = document.getElementsByClassName("listTasks")
// console.log(listmain)
// let listTasks = [];
// function submit() {
//     if (!inputValue.value == "") {
//         listTasks.push("" + inputValue.value)
//         console.log(listTasks)
//         inputValue.value = ""
//     }
//     for (let index = 1; index < listmain.length; index++) {
//             icon = document.createElement("i")
//             icon.setAttribute("class", "far fa-times-circle")
//             checkButton = document.createElement("input") 
//             checkButton.setAttribute("type","checkbox")
//             plist = document.createElement("p")
//             plist.textContent = listmain[index]

//     }
// }