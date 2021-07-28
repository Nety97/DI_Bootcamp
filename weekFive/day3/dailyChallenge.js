

//exercise 1
// let wordss = ['hello','bus', 'police', 'food'];
// function makeAllCaps(x) {
//     let words = new Promise((resolve, rejected)=>{
//         resolve(x)
//         rejected("OOOOOps")
//     })
//     .then(resul => console.log(resul.toUpperCase()))
//         // sortWords(resul) 
//     .catch(r => console.log(r))
    
    
// }

// // function sortWords(resul) {
// //     let wor = new Promise((resolve, rejected)=>{
// //         resolve(resul)
// //         rejected("OOOOOps")
// //     })
// //     .then(resu => console.log(sortWords(resu)))
// //     .catch(r => console.log(r))
// //     // console.log(resu)
// // }

// makeAllCaps(wordss)
let myArray = ["sapir", "yakir", "alon","ziv", "may", "nati"]
let myArray2 = [true, "yakir", 7,"ziv", "may", "nati"]
let makeAllCaps = arr => {
    let arrayPromise = new Promise((resolve, reject) => {
       let check = arr.every(item => typeof item == "string")
            if (check) {
               resolve(arr.map(i => i.toUpperCase()))
            } else {
                reject("One of the values is not a string!")
            }
    })
    return arrayPromise 
}
let sortWords = array => {
    let promiseSort = new Promise((resolve, reject) => {
        if(array){
            resolve(array.sort())
        } else {
            reject("we have a problem")
        }
    })
    return promiseSort
}
makeAllCaps(myArray)
.then(sortWords)
.then(result => console.log("final result",result))
.catch(error => console.log("ERROR:",error))
makeAllCaps(myArray2)
.then(sortWords)
.then(result => console.log("final result2",result))
.catch(error => console.log("ERROR:",error))