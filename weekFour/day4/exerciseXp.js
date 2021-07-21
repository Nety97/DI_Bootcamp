//exercise 1 
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Canada, Vancouver. latitude (49.2827), Longitude(-123.1207)

//exercise 2
// let {first: "Pika", last: "Chu"} = surName
function displayStudentInfo(pass) {
    const {first, last} = pass
    return `your full name is ${first}  ${last}`
}
console.log(displayStudentInfo({first: "Pika", last: "Chu"}))

//exercise 3
const users = { user1: 18273, user2: 92833, user3: 90315 }
let users2 =  Object.entries(users);
for (let index = 0; index < users2.length; index++) {
    users2[index][1] *= 2    
}
console.log(users2)

// let users3 = users2.map( (x)=>{
//     return x.map((x,y)=>{
//         return x * 2
//     })
// })
// console.log(users3)


//exercise 4 
class Person {
constructor(name) {
    this.name = name;
}
}

const member = new Person('John');
console.log(typeof member);
  // object
//exercise 5 
// Which constructor will successfully extend the Dog class?
class Dog {
constructor(name) {
    this.name = name;
}
};
// // 1
// class Labrador extends Dog {
// constructor(name, size) {
//     this.size = size;
// }
// };
// 2 this one
class Labrador extends Dog {
constructor(name, size) {
    super(name);
    this.size = size;
}
};
// 3
// class Labrador extends Dog {
// constructor(size) {
//     super(name);
//     this.size = size;
// }
// };
// // 4
// class Labrador extends Dog {
// constructor(name, size) {
//     this.name = name;
//     this.size = size;
// }
// };

// exercise 6
//1
// [2] === [2] // because the are comparing also 
// {} === {}   // the reference in the memory 
//2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5}; 
object1.number = 4;
//object1 = 4 // passing value by reference
//object2 = 4
//object3 = 4 
//object4 = 5

//3
class Animal{
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color
    }
    
}
class Mamal extends Animal{
    constructor(name, type, color){
        super(name, type, color);
        

    }
    sound(){
        console.log(`mooo name is ${this.name} mooo type is ${this.type} and mooo color is ${this.color}`)
    }
}
let cow = new Mamal("maria", "vaquita", "black & white")
cow.sound()