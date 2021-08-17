let cont = document.getElementById('countries')

fetch('http://localhost:8080/cont')
.then(res => res.json())
.then(dat => printCountries(dat))

function printCountries(country) {
    country.forEach(element => {
        let opt = document.createElement('option')
        opt.textContent = element.country
        cont.appendChild(opt)
    });
}