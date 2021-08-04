let box = document.getElementById('container')
let btn = document.getElementById('button')
btn.addEventListener('click', clear)
let dat = localStorage.getItem('toPay')
let datas = JSON.parse(dat)
console.log(datas)

for (let index = 0; index < datas.length; index++) {
    let divs = document.createElement('div')
    let p1 = document.createElement('p')
    let imgs = document.createElement('img')
    let p2 = document.createElement('p')
    p1.textContent = datas[index].name
    imgs.setAttribute('src', datas[index].url)
    imgs.style.height = '100px'
    imgs.style.width = '120px'
    p2.textContent = datas[index].price
    divs.style.margin = '20px'
    divs.appendChild(imgs)
    divs.appendChild(p1)
    divs.appendChild(p2)
    box.appendChild(divs)
}





function clear() {
    localStorage.clear()
    let h2 = document.createElement('h2')
    h2.textContent = 'Your payment was recieved, congrats!'
    document.body.appendChild(h2)
}