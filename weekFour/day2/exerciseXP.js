//exercise 1
console.log(((a,b) => a+b)(4,4));


//exercise 2
const addTo = x => y => x + y;
var addToTen = addTo(10);
addToTen(3); // result = 13

//exercise 3
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // result = 31 

//exercise 4
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) // result = 17

//exercise 5 
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) //result = 16



