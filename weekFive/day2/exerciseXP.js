// exercise 1
let gifs = new XMLHttpRequest()
gifs.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
gifs.responseType = 'json';
gifs.send()

gifs.onload = function () {
    // console.log(gifs)
    if (gifs.status != 200) {
        console.log("ups something went wrong (we recieve the request but cant find what you are looking for)")
    } else if (gifs.status === 200) {
        console.log(gifs.response.data)
    }
}
gifs.onprogress = function () {
    console.log("loading.....")
}
gifs.onerror = function () {
    console.log(" wojojo i hack your computer")
}


//exercise 2 
let gifs2 = new XMLHttpRequest()
gifs2.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
gifs2.responseType = 'json';
gifs2.send()

gifs2.onload = function () {
    // console.log(gifs)
    if (gifs2.status != 200) {
        console.log("ups something went wrong (we recieve the request but cant find what you are looking for)")
    } else if (gifs2.status === 200) {
        console.log(gifs2.response.data)
        // pegarGif(gifs2.response.data)
    }
}
gifs2.onprogress = function () {
    console.log("loading.....")
}
gifs2.onerror = function () {
    console.log(" wojojo i hack your computer")
}

// let divs = document.getElementById("boxes")
// function pegarGif(x) {
//     x.forEach(element => {
//         let imgs = document.createElement("iframe")
//         imgs.style.width = "480";
//         imgs.style.height= "480"; 
//         imgs.setAttribute("src", element.embed_url)
//         divs.appendChild(imgs)
//     });
// }