let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    let section = document.getElementsByClassName("listPlanets")[0]
for (let index = 0; index < planets.length; index++) {
    let divos = document.createElement("div")
    divos.classList.add("planet")
    divos.classList.add( planets[index])
    divos.innerText =  planets[index]

    section.appendChild(divos)
}

// console.log(planets)