// let x = document.getElementsByTagName("tr")[1]
// console.log(x)
// let 


// function  insertRow(event){
//     let x = document.getElementById("sampleTable");
//     let y = x.insertRow(0);
//     let celda = y.insertCell(0);
//     let celda2 = y.insertCell(1);
//     celda.innerText = "Yoo"
//     celda2.innerText = "MA kore"
// }

// let all = document.getElementsByTagName("input")[0]
// all.addEventListener("click", insertRows)

// function insertRows(event) {
//     let x = document.getElementById("sampleTable");
//     let y = x.insertRow(0);
//     let celda = y.insertCell(0);
//     let celda2 = y.insertCell(1);
//     celda.innerText = "jaja"
//     celda2.innerText = "twins"
// }

let formNew= document.forms[0].elements;
console.log(formNew)

function getvalue(event) {
    // for (let iterator of formNew) {
    //     console.log(iterator.value)
    //     event.preventDefault()
    // }
    for (let index = 0; index < 2; index++) {
        let element = formNew[index].value;
        console.log(element)
        event.preventDefault()
    }
    // let values = formNew[0].value
    // let values2 = formNew[1].value
    // console.log(values, values2)
    // event.preventDefault()
}

