

//exercise 1
let wordss = ['hello','bus', 'police', 'food'];
function makeAllCaps(x) {
    let words = new Promise((resolve, rejected)=>{
        resolve(x)
        rejected("OOOOOps")
    })
    .then(resul => console.log(resul.toUpperCase()))
        // sortWords(resul) 
    .catch(r => console.log(r))
    
    
}

// function sortWords(resul) {
//     let wor = new Promise((resolve, rejected)=>{
//         resolve(resul)
//         rejected("OOOOOps")
//     })
//     .then(resu => console.log(sortWords(resu)))
//     .catch(r => console.log(r))
//     // console.log(resu)
// }

makeAllCaps(wordss)