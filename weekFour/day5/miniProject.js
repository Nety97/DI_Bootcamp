const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/ajs'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/kaka'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/mqlo'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/dasd'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/bueno'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/raro'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/oliver'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/came'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/shon'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/mexican'
    }
    ];
let input = document.getElementById("inp")
input.addEventListener("input", erase)
function erase(event) {
    console.log(event.target.value)
    const filterArray = robots.filter(item =>{
        return item.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    cards(filterArray)
}


let div = document.getElementById("cards");

function cards(robots) {
    div.innerHTML = ""
    for (let index = 0; index < robots.length; index++) {
        let divs = document.createElement('div')
        let imgs = document.createElement('div')
        let ps = document.createElement('p')
        let ps2 = document.createElement('p')
        imgs.classList.add("cardImg")
        imgs.style.backgroundImage = `url(${robots[index].image})`
        // ps.classList.add("coco")
        ps.textContent = robots[index].name
        ps2.textContent = robots[index].email
        divs.classList.add("card")
        divs.appendChild(imgs)
        divs.appendChild(ps)
        divs.appendChild(ps2)
        div.appendChild(divs)
        
    } 
}
cards(robots);



// console.log(input.value)
