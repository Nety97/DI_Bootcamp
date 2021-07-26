

let request = new XMLHttpRequest()
request.open('GET', 'https://jsonplaceholder.typicode.com/users')
request.send()

request.onreadystatechange = function () {
    if (request.readyState == 0) {
        console.log("unsent")
    } else if (request.readyState == 1) {
        console.log("open called")
    } else if (request.readyState == 2) {
        console.log("response headers received")
    } else if (request.readyState == 3) {
        console.log("response is loading")
    } else if (request.readyState == 4) {
        console.log("request complete")
        console.log(request)
        if (request.status != 200) {

            document.write("Sorry the request was success but didnt found what your where looking for")
        } else if (request.status === 200) {
            console.log(request)
            let jsonOb = JSON.parse(request.response)
            printElements(jsonOb)
        }
    }
    
}

function printElements(x) {
    x.forEach(element => {
        document.write(`Hi my name is: <strong> ${element.name}</strong> my email is: <strong> ${element.email}</strong> and my city is: <strong>${element.address.city}</strong> <br> `)
    });
}