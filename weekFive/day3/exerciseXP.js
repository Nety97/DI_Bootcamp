// exercise 1 
function compareToTen(x) {
    let compare = new Promise(function(resolve,rejected){
        if (x > 10) {
            resolve (`${x} is greater than 10, success!`)
        } else {
            rejected (`${x} is smaller than 10, error!`)
        }
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))

}
compareToTen(15)
compareToTen(8)

//exercise 2
let prom = new Promise(function (resolve, rejected) {
    setTimeout(()=>{
        resolve(console.log("success!"))

    },4000)
    rejected('Ooops something went wrong')
})
.catch(err=> console.log("Ooops something went wrong"))


let prom2 = Promise.resolve(
    setTimeout(() => {
        console.log("success")
    }, 4000))


//exercise 3
let pr = Promise.resolve(console.log(3))

let pros = Promise.reject(console.log("boo"))
console.log('1')