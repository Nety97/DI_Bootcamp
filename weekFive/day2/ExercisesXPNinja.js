let btn = document.getElementById('search')
let textG = document.getElementById('value')
let div = document.getElementById('box')
let frame;
btn.addEventListener("click", createGif)

function createGif() {
    console.log('hi')
    let txt = textG.value;
    console.log(txt)
    let gif = new XMLHttpRequest()
    gif.open('GET', 'https://api.giphy.com/v1/gifs/search?q=' +txt+ '&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    gif.responseType = 'json';
    gif.send()

    gif.onload = function () {
        if (gif.status != 200) {
            console.log('we recieve your request but something went wrong')
        } else if (gif.status === 200) {
            console.log(gif)
            gif.response.data.forEach((x,y) => {
                console.log(x, y)
                frame = document.createElement("iframe")
                frame.setAttribute('src', gif.response.data[y].embed_url)
                // console.log(gif.response.data[y].embed_url)
                frame.setAttribute('width', '150px')
                frame.setAttribute('height', '150px')
                
                div.appendChild(frame)
            });
            
        }
        
    }
    textG.value = ""
}


let btnDelete = document.getElementById('delete')
btnDelete.addEventListener('click', deleteGif)
function deleteGif() {
    div.innerHTML = ""
    
}

