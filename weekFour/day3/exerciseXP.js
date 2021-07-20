//exercise 1
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// result = ["bread", "carrot", "potato", "chicken", "apple", "orange"]


// ------2------
const country = "USA";
console.log([...country]);
// result in the console: ["U", "S", "A"]


// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// result in the console: undefined array

//exercise 2
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let userFirstName = users.map(element => console.log(`Hello ${element.firstName}`))
// Using the filter() method, congratulate only the Full Stack Residents.
let userCongratulate = users.filter(element => {
     if (element.role ==='Full Stack Resident') console.log(`congratulations! ${element.firstName}`)
    })

//exercise 3
let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.
let reduction = epic.reduce((x, y)=> x+y)
console.log(reduction)

//exercise 4
let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
//    Use the filter() method to congratulate the students that passed the course.
let passedStudent = student.filter((x) => {
    if (x.isPassed === true) {
        console.log(`Congratulations! ${x.name} you have passed the course`)
        return x.isPassed
    }
})
console.log(passedStudent)

let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);