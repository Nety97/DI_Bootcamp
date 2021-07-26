let btn = document.getElementById('search')
let textG = document.getElementById('value')
let div = document.getElementById('box')
let frame;
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
            let buttons = document.createElement('button')
            frame.setAttribute('src', gif.response.data[0].embed_url)
            frame.setAttribute('width', '150px')
            frame.setAttribute('height', '150px')
            buttons.textContent = "Delete"
            div.appendChild(buttons)
            div.appendChild(frame)
            buttons.addEventListener('click', delet =>{
                div.removeChild(frame)
                div.removeChild(buttons)
            })
            
        }
        
    }
    textG.value = ""
}


let btnDelete = document.getElementById('delete')
btnDelete.addEventListener('click', deleteGif)
function deleteGif(e) {
    div.innerHTML = ""
    
}

