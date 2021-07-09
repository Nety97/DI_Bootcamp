let userNumber = parseInt(prompt("Give a number to sing 99 Bottles of Beer"));
console.log(userNumber);
let bottlesLeft = userNumber;
let takeDown = 1;
function numberOfBottles(bottlesLeft, takeDown ) {
    console.log(`${bottlesLeft} bottles of beer on the wall`)
    console.log(`${bottlesLeft} bottles of beer on the wall`)
    console.log(`${bottlesLeft} bottles of beer`)
    console.log(`Take ${takeDown} down, pass them around`)
    
    if (takeDown - bottlesLeft == 1) {
        console.log(`${bottlesLeft} bottles of beer on the wall`)
        console.log(`${bottlesLeft} bottles of beer on the wall`)
        console.log(`${bottlesLeft} bottles of beer`)
        console.log(`Take ${takeDown} down, pass it around`)

    }
    else if (takeDown - bottlesLeft == 0) {
        console.log("nothing to pass")
    } 
    // i could not figure out how to print when only 1 bottle left print pass it around
    
    
}
for (let x = 0; x < userNumber; x++) {
    numberOfBottles(bottlesLeft, takeDown)
    bottlesLeft -= takeDown  
    takeDown ++
   
     if (bottlesLeft < takeDown) {
        takeDown= bottlesLeft
        numberOfBottles(bottlesLeft, takeDown)
        break
    }      
}




// for (let x = 0; x < userNumber; x++) {
//     console.log(x)
//     if(bottlesLeft>takeDown){
//         numberOfBottles(bottlesLeft, takeDown)
//         takeDown++
//     }else if(bottlesLeft==takeDown){
//         numberOfBottles(bottlesLeft, takeDown)
//         break
//     }else{
//         takeDown = bottlesLeft
//         numberOfBottles(bottlesLeft, takeDown)
//         break
//     }