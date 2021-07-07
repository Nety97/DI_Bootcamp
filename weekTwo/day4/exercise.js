// exercise 1

// let named = "Nety";
// let age = 20;
// let hobbies = "Archery and computer science"

// infoAboutMe = () => {
//     let info = console.log(`My name is ${named} and i'm ${age} years old and my hobbies are ${hobbies} `);
//     return info
// };
// infoAboutMe();

// function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies =[]) {
//      console.log(`Your name is ${personName} and your age is ${personAge} years old your favorite color is ${personFavoriteColor} `);
//      for (let index = 0; index < personHobbies.length; index++) {
//             console.log(`${personName} one of your hobbies are ${personHobbies[index]}`)         
//      }

// }
// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

//exercise 2
// Ask the user for their age, and save the value to a variable.
// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
// Call the function.
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.


// let ageUser = parseInt(prompt("what your age"));
// console.log(ageUser);
// function checkDriverAge (noMatter) {
//     if (noMatter < 18) {
//         console.log("Sorry, you are too young to drive this car. Powering off")

//     } else if (noMatter > 18){
//         console.log("You are old enough to drive, Powering On. Enjoy the ride!")
//     }else{
//         console.log("Congratulations on your first year of driving. Enjoy the ride!")
//     }
// };

// checkDriverAge(ageUser);

//exercise 3
// structions
// Create a function called checkNumber() that takes no parameter.
// In the function, loop through numbers 0 to 100.
// Add an if/else block
// If the number is even, console.log "the number <number> is even"
// Else, console.log "the number <number> is odd"
// Call the function


// checkNumber = () =>{
//     for (let x = 0; x < 101; x++) {
//         if (x % 2 === 0 ) {
//             console.log(`the number ${x} is even`)
//         }  else{
//             console.log(`the number ${x} is odd`)
//         }      
//     }
// }

// checkNumber();


// exercise 4


// isDivisible = (divisor) =>{
//     let sum = 0;
//     for (let y = 0; y < 501; y++) {
//         if (y % divisor === 0) {
//             console.log(y)
//             sum += y;
//         }
//     }  
//     console.log(`The sum of all of them is: ${sum}`) 
// }

// isDivisible(23);
// isDivisible(3);
// isDivisible(45);

// exercise 5

// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// };

// checkBasket = () =>{
//     let check = prompt("is your item on the basket?")
//     console.log(check);
//     for (let item in amazonBasket) {
//         if (item == check) {
//             console.log(`whoa you alredy have ${item}`)            
//         } else{
//             console.log("you dont have "+ item)
//         }
//     }    
// };
// checkBasket()

// exercise 6

// changeEnough = (change, Money) => {
//     let values = [.25,  .10, .05, .01]
//     let total = 0;
    
//     for (let index = 0; index < change.length; index++) {
//         total += change[index] * values[index]
//     }
//     if (total >= Money ) {
//         console.log("you have enoght")
//     } else {
//         console.log("you dont have enoght")
//     }
// }
// changeEnough([2, 100, 0, 0], 14.11); 
// changeEnough(0, 0, 20, 5, 0.75);

//exercise 7

// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// };
// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// };
// let shoppingList = ["banana", "orange", "apple"];

// myBill = () => {
//     for (let key of shoppingList) {
//         if(stock[key] > 0){
//             console.log(`1 ${key} costs ${prices[key]}`)
//             stock[key] -= 1
//         }
            
        
//     }
// }
// console.log(stock)
// myBill()
// console.log(stock)

// exercise 8

// let bill = parseInt(prompt("What amount is your bill? "))
// console.log(bill)
// function tip() {
//     if (bill > 200){
//         console.log(`tip of ${bill*0.1}`)
//         console.log(`your bill is ${bill} and you have to pay ${bill += bill*0.1} `)
//     } else if (bill >= 50 && bill <= 200){
//         console.log(`tip ${bill*0.15}`)
//         console.log(`your bill is ${bill} and you have to pay ${bill += bill*0.15} `)
//     } else if (bill < 50) {
//         console.log(`tip ${bill*0.2}`)
//         console.log(`your bill is ${bill} and you have to pay ${bill += bill*0.2} `)
//     }else{
//         console.log(" i will never console")
//     }
// }
// tip(bill);

// exercise 9
let nights =  parseInt(prompt("how many nights you wanna stay?"))
let plane = prompt("where you wanna go, London, Paris, other place?")
let costPerNight;
let costPlane;
function totalVacationCost() {
    
    hotelCost = (nights) => {
        console.log(nights)

        if (isNaN(nights)) {
            nights =  parseInt(prompt("how many nights you wanna stay?"))
            }
        costPerNight = nights * 140;
        return costPerNight
    }
    planeRideCost = (plane) => {
        // costPlane ="";
        if (isNaN(plane)== true) {
            plane = prompt("where you wanna go, London, Paris, or other place?")
            nPlane = plane.toLowerCase
        }else if(nPlane == "london"){
            costPlane + 183;
        }
        else if(nPlane == "paris"){
            costPlane + 220;
        }
        else {
            costPlane + 300;
        }
        return costPlane
    }
    console.log(`the price per night is ${costPerNight} for the plane is ${costPlane}`)
}
totalVacationCost(nights, plane)