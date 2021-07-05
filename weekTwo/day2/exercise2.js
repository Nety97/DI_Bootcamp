// Exercise 1
// let language = prompt("What language do you speak?").toLowerCase();
// console.log(language)
// switch (language) {
//     case "english": 
//         console.log("Hello")
//         break;
//     case "french": 
//         console.log("Bonjour")
//         break;
//     case "hebrew": 
//         console.log("Shalom")
//         break;
//     default: console.log("01110011 01101111 01110010 01110010 01111001")
//         break;
// }


// Exercise 2
let grade = prompt("what was your grade");

switch (grade) {
    case (grade > 90):
        console.log("A")
        break;
    case (grade > 80 || grade <= 90):
        console.log("B")
        break;
    case (grade >= 70 || grade <= 80):
        console.log("C")
        break;
    default: console.log("D")
        break;
}
