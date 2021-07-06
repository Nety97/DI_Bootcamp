// Create an array called colors where the value is a list of your favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors = ["green", "blue", "red", "white", "black"]

for (let index = 0; index <= colors.length-1; index++) {
    // console.log(`My #${index +1} choise is ${colors[index]}`)
    switch (index) {
        case 0:
            console.log(`My #${index +1}st choise is ${colors[index]}`)
    
            break;
        case 1:
            console.log(`My #${index +1}nd choise is ${colors[index]}`)

            break
        case 2:
            console.log(`My #${index +1}rd choise is ${colors[index]}`)
            break
        case 3:
            console.log(`My #${index +1}th choise is ${colors[index]}`)
            break
        case 4:
            console.log(`My #${index +1}th choise is ${colors[index]}`)
            break
        default: console.log("wooow")
            break;
    }
}


// exercise 2
// Write code to remove “Greg” from the people array.
// Write code to replace “James” to “Jason”.
// Write code to add your name to the end of the people array.
// Using a loop, iterate through the people array and console.log each person.
// Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
// Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
// Write code that console.logs Mary’s index. take a look at indexOf on google.
// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people.splice(2,1,"Jason");
people.push("Nety");

for (let index = 0; index < people.length; index++) {
    console.log(people[index])    
};
for (let key of people) {
           if (key == "Jason") {
            
            break;
        }
        console.log(key) 

};

let newPeople = people.slice(0,3);
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));// because is not in the array
let last =  people[people.length-1];


// console.log(people);
// console.log(newPeople);
// console.log(last)
// exercise 3
// Prompt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// Hint : Check the data type you receive from the prompt (ie. typeof method)

let userNumber = parseInt(prompt("give me a number"));


 while (userNumber < 10){
    
    userNumber = parseInt(prompt("give another number"))
 };




//exercise4
//  Prompt the student for their name :
// If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// Hint: Look up the statement if ... in
// If the name is not in the object, console.log: "Hi! I'm a guest."


let userNameList = prompt("What are your name");
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
let mesage  = "Hi! I'm a guest."
for (let key in guestList) {
   
    if (userNameList == key) {
        mesage = `Hi! I'm ${key}, and I'm from ${guestList[key]}. `
    } 
} 

console.log(mesage)

// exercise 5 
// Create an object called family with a few key value pairs.
// Console.log the keys. (using a for loop).
// Console.log the values. (using a for loop).


let family = {
    father : "Yosef",
    mother : "Sara",
    sun : "jaim"
}
let fam = "";
let famNames = "";
for (let key in family) {
    if (2> 1) {
        fam += key + " ";
        famNames += family[key] + " ";
        
    }
}
console.log( "keys are: " +fam)
console.log("values are: " +famNames);



//exercise 6

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  let nName = "";
for (let key in details) {
     nName += " "+ key +" "+details[key]
}
console.log(nName)



//exercise 7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
let secret = "";
for (let index = 0; index < names.length; index++) {
    secret += (`${names[index][0]} `)
}

console.log(secret)