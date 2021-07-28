// let famous = 'Lebron'
// let famous2 = 'Messi'
// function famousName(x, y ) {
    
//     let p1 = new Promise(function (resolve,reject) {
//         if (typeof x == "string" && typeof y == 'string') {
//             resolve([x , y])
//             // console.log(famous, famous2)
            
//         }else{
//             reject('is not a string')
//             console.log('there are not string')
//         }
        
//     })
//     // console.log(p1)
//     return p1
// }
// // famousName()

// function noun() {
//     let nou = 'with'
//     let p2 = new Promise( function (resolve, reject) {
//         if (nou.length > 3) {
//             resolve(nou)
//             console.log(nou)
            
//         }else{
//             reject('its bigger than 3 words')
//             console.log('bigger')
//         }
//         return p2

//     })
// }
// // noun()

// function cityfunc(x) {
//     // let city = 'Sao Paulo'
//     let p3 = new Promise( function (resolve, reject) {
//         if ( x[0] === x[0].toUpperCase()) {
//             resolve(x)
//             // console.log(city)
            
//         }else{
//             reject('doesnt start with uppercase')
//             console.log('buuu')
//         }

//     })
//     return p3
// }
// // cityfunc()

// function verbs() {
//     let verb = 'playing'
//     let p4 = new Promise( function (resolve, reject) {
//         if (verb.slice(-3 == 'ing')) {
//             resolve(verb)
//             console.log(verb)
//             return p4
            
//         }else{
//             reject('doesnt end with ing')
//             console.log('buuu')
//         }
//     })
// }
// // verbs()

// const sentence = async () => {
//     let wait1 = await famousName('Messi', 'Lebron');
//     // sent = famous[0] + 'is'
//     let wait2 = await noun();
//     // sent += nou + famous2[1]
//     let wait3 = await cityfunc("Paris");
//     // sent += "in" + city
//     let wait4 = await verbs();
//     // sent += verb
//     console.log(`${wait1[0]} is in ${wait3}`)
// }
// sentence()

let bigDiv = document.getElementById('box')

async function pickWord() {
    let ramd = await fetch('http://random-word-api.herokuapp.com/word?number=1')
        if (ramd.status == 200) {
            let response = await ramd.json();
            console.log(response)
            randomGif(response)
        } else{
            console.log('error')
            throw new Error('not 200 status')
        }
    
}

async function randomGif(d) {
    let gi = await fetch('https://api.giphy.com/v1/gifs/random?tag=' +d+'&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')

    // .then(response  => {
    //     console.log(response )
        if (gi.status == 200) {
            let response = await gi.json()
            let res = await response.data
            // console.log(res.embed_url)
            printG(res, d)
            // return response 
        } else{
            throw new Error('not 200 status')
        }
// })
// // .then(jso=> jso.data)
// .then(jso=> printG(jso.data, d))
// .catch(err => console.log(err))

}

function printG(d, word) {
    console.log(d.embed_url, "hihihi")
    if (d.embed_url) {
        let di = document.createElement("iframe")
        let ps = document.createElement("p")
        di.setAttribute('src', d.embed_url)
        ps.textContent = word;
        di.setAttribute('width', '500px')
        di.setAttribute('height', '500px')
        bigDiv.appendChild(di)
        bigDiv.appendChild(ps)
    } else{
        pickWord()
    }
    

}

pickWord()