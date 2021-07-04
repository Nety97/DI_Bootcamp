//Exercise 1

let randomWords = ["Hello", "General", "Wood", "Water", "Computer"];
console.log(randomWords);

let a = "Google";
let b = "Meet";

let c = b[0] + a[1] + a[2] + a[3] + a[4] + a[5];
let d = a[0] + b[1] + b[2] + b[3];

let e = c + " " +d;
console.log(e)
document.write(e)

//Exercise 2

let num1 = parseInt(prompt("Give me one number"));
let num2 = parseInt(prompt("Give me one number to sum it"));
let result = num1 + num2;
console.log(result)

alert("the result of the numbers you gave me is: " + result);

//Exercise 3

let num3 = parseInt(prompt("Give me one number"));

let math = prompt("Give me a sign like + - / * ");
let num4 = parseInt(prompt("Give me 1 last number"));

let result2 = eval(num3 + math + num4);
console.log(result2);
console.log(typeof result2);

alert("the result of the numbers you gave me is: " + result2)

