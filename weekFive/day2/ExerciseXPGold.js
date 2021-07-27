let gif = new XMLHttpRequest()
gif.open('GET', 'https://api.giphy.com/v1/gifs/search?q=funny&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
gif.responseType = 'json';
gif.send()
gif.onload = function () {
    if (gif.status != 200) {
        console.log('we recieve your request but something went wrong')
    }else  {
        console.log(gif.response)
        frame = document.createElement("iframe")
        frame.setAttribute('src', gif.response.data[random].embed_url)
        frame.setAttribute('width', '500px')
        frame.setAttribute('height', '500px')
        div.appendChild(frame)
    }
}


let div =  document.getElementById('box')
let random = Math.floor(Math.random() * 50)