let btn = document.getElementById('search')
let textG = document.getElementById('value')
let div = document.getElementById('box')
let frame;
let di;
btn.addEventListener("click", createGif)

function createGif(e) {
    console.log('hi')
    let txt = textG.value;
    console.log(txt)
    let gif = new XMLHttpRequest()
    gif.open('GET', 'https://api.giphy.com/v1/gifs/search?q=' +txt+ '&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    gif.responseType = 'json';
    gif.send()

    gif.onload = function () {
        if (gif.status != 200) {
            console.log('we recieve your request but something went wrong')
        } else if (gif.status === 200) {
            console.log(gif.response)
            frame = document.createElement("iframe")
            di = document.createElement("div")
            let buttons = document.createElement('button')
            frame.setAttribute('src', gif.response.data[0].embed_url)
            frame.setAttribute('width', '250px')
            frame.setAttribute('height', '250px')
            buttons.textContent = "Delete"
            di.appendChild(frame)
            di.appendChild(buttons)
            div.appendChild(di)
            buttons.addEventListener('click', delet)
            
        }
        
    }
    textG.value = ""
    globalThis.onprogress = function () {
        console.log('loading..... ')
    }
}

function delet(e) {
    console.log(e)
    e.target.parentElement.remove()
    
}
let btnDelete = document.getElementById('delete')
btnDelete.addEventListener('click', deleteGif)
function deleteGif(e) {
    div.innerHTML = ""
    
}

