// Make a function that takes in a single parameter and returns a new promise.
// using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// if the input is a string, the promise resolves with that same string uppercased.
// if the input is anything but a string it rejects with that same input
// if the promise is resolved, use then to console.log the string twice (use repeat)
// If the promise is rejected use catch to console.log the error
// finally call a function that console.log ("congratulation") (editado) 



// function jojo(x) {
//     let hello = new Promise(function (resolve, rejected) {
//         setTimeout(() => {
//             if (typeof x == "string") {
//                 resolve(x)
//             } else {
//                 rejected(x)
//             }
//         },5000)
//     })
//     return hello
    

// }

// let equis = jojo("congratulation");
// equis.then(message => message.toUpperCase())
// .then(messa => console.log(messa.repeat(2)))
// .catch(err => console.log(err))
// .finally(()=> console.log('the promise is over'))
let x = document.getElementById('box')
function pickWord() {
fetch('http://random-word-api.herokuapp.com/word?number=1')
.then(response  => {
    console.log(response )
    if (response.status == 200) {
        // console.log(responde)
        return response .json()
    } else{
        throw new Error('not 200 status')
    }
    
})
// .then(y=> y)
.then(d=> {
    randomGif(d[0])
    console.log(d)

})
.catch(err => console.log(err))
}
function randomGif(d) {
    fetch('https://api.giphy.com/v1/gifs/random?tag=' +d+'&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    .then(response  => {
        console.log(response )
        if (response.status == 200) {
            // console.log(responde)
            return response .json()
        } else{
            throw new Error('not 200 status')
        }
})
// .then(jso=> jso.data)
.then(jso=> printG(jso.data, d))
.catch(err => console.log(err))

}

function printG(dat, word) {
    console.log(dat.embed_url, "hihihi")
    if (dat.embed_url) {
        let di = document.createElement("iframe")
        let ps = document.createElement("p")
        di.setAttribute('src', dat.embed_url)
        ps.textContent = word;
        di.setAttribute('width', '500px')
        di.setAttribute('height', '500px')
        x.appendChild(di)
        x.appendChild(ps)
    } else{
        pickWord()
    }
    

}

pickWord()