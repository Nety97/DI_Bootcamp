// I'm fasting maybe I miss something
//exercise 1 
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
} 
// a = 3

//#2
var a = 0;
function q2() {
    a = 5;
}
function q22() {
    alert(a);
}
// a = 0

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

// undefined

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// a = "test"

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// a = 5 

//exercise 2 

function winBattle(){
    return true;
}
experiencePoints = () =>  winBattle ? 10 : 1
console.log(experiencePoints())

//exercise 3

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
console.log(colors.includes("Violet"));
colors.forEach((x, y, z) => z[y]  = console.log((`#${y+1} choise is ${x}`)))

//exercise 4

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
color.forEach((x, y, z) => {
    if (y == 0) {
        console.log(`#${y+1}${ordinal[1]} choise is ${x}`)
    }else if (y ==1) {
        console.log(`#${y+1}${ordinal[2]} choise is ${x}`)
    }else if(y ==2){
        console.log(`#${y+1}${ordinal[3]} choise is ${x}`)
    } else{
        console.log(`#${y+1}${ordinal[0]} choise is ${x}`)
    }

})
//exercise 5
function isString(x) {
    console.log(x.includes(""))
} 
isString('hello'); 
isString([1, 2, 4, 0]);

// if in the console says true its because is a string, if not its a number

//exercise 6

let bankAmount = 50000;
let vat = .17;
let details = ["+200", "-100", "+146", "+167", "-2900"]
details.forEach((x, y, z ) => z[y]  = eval(x * 0.17 + x))
console.log(details)
details.forEach(x => bankAmount += x )
console.log(`your money at the end of the month is: ${bankAmount}`)

// bankAmount + details.forEach((x,y,z))

