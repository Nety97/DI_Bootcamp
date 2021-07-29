let btn = document.getElementById('button')
btn.addEventListener('click', starWars)
let container = document.getElementById('box')

let array = ['Height: ','Gender: ', 'Birth Year: ', 'Home World: ']
let array2 = ['height','gender', 'birth_year', 'homeworld']


async function starWars() {
    container.innerHTML= ""
    let random = Math.floor(Math.random()* 100)
    let divhide = document.createElement('div')
    divhide.classList.add('settings')
    let pHide= document.createElement('p')
    let is = document.createElement('i')
    pHide.textContent = "Loading......."
    is.setAttribute("class","fas fa-spinner fa-spin")
    divhide.appendChild(is)
    divhide.appendChild(pHide)
    container.appendChild(divhide)
    
    try{
        
        let a = await fetch('https://swapi.dev/api/people/'+ random +"/");
        let b = await a.json()
        divhide.classList.add('hide')
        console.log(a)
        let h2 = document.createElement('h2')
        h2.textContent = b.name
        container.appendChild(h2)
        let p = document.createElement('p')
        p.textContent= array[0] + b.height
        container.appendChild(p)
        let p2 = document.createElement('p')
        p2.textContent= array[1] + b.gender
        container.appendChild(p2)
        let p3 = document.createElement('p')
        p3.textContent= array[2] + b.birth_year
        container.appendChild(p3)
        // fetch for the name planet
        let c = await fetch(b.homeworld)
        let d = await c.json()
        console.log(d)
        let p4 = document.createElement('p')
        p4.textContent= array[3] + d.name
        container.appendChild(p4)
    }
    catch (error){
        let p5 = document.createElement('p')
        p5.textContent = "I couldn't find him I think the empire killed him";
        container.innerHTML='';
        container.appendChild(p5)
    }
  


}

