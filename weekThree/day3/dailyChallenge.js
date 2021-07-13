window.onload=function(){
let borrar = 8;
let inpu = document.getElementById('input')
console.log(inpu)
// let letters = new Regex (/^[A-Za-z]+$/);
// let re = /ab+c/;
let numbers = [48,49,50,51,52,53,54,55,56,57]
inpu.addEventListener("keydown", onlyLetters)

function onlyLetters(e) {
    console.log(e)
    for (let index = 0; index < numbers.length; index++) {
    
        if (e.keyCode === numbers[index]) {
            alert("thats not a letter")
            // inpu.remove(keyCode)
            // inpu.value = inpu.value 
            // console.log(inpu.value)
        }
    }
}

}


//!e.keyCode == [a-zA-Z]