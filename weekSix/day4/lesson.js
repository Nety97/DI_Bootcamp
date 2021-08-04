let products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];
// console.log(products[0])
let arrayOfObjects = [];

let btn = document.getElementById('button')
let btn2 = document.getElementById('button2')
let btn3 = document.getElementById('button3')
let btn4 = document.getElementById('button4')

btn.addEventListener('click', addToArray)
btn2.addEventListener('click', addToArray2)
btn3.addEventListener('click', addToArray3)
btn4.addEventListener('click', addToArray4)

function addToArray() {
    arrayOfObjects.push(products[0])
    console.log(arrayOfObjects)
}
function addToArray2() {
    arrayOfObjects.push(products[1])
    console.log(arrayOfObjects)
}
function addToArray3() {
    arrayOfObjects.push(products[2])
    console.log(arrayOfObjects)
}
function addToArray4() {
    arrayOfObjects.push(products[3])
    console.log(arrayOfObjects)
}


let pay = document.getElementById('pay')
pay.addEventListener('click', storeData)

function storeData() {
    let datas = JSON.stringify(arrayOfObjects)
    console.log(datas)
    localStorage.setItem('toPay',datas)
}