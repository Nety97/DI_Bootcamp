const fs = require('fs')

fs.readFile('right-left.txt', (err,data)=> {
    if (err) {
        console.log(err)
    }
    else{
        // console.log("totalSteps",totalSteps(data.toString()));
        console.log("firstStep",firstStep(data.toString()));

    }
    // .then(data => data.toString())
    // let a = [data]

    // a.push(data)
    // a.
    // a.toString()
    // a.split(',');
    
    
    //make something to put coma between
    
})
// function totalSteps(a) {
//     let s = [...a]
//     let position = 0;
//     s.forEach(element => {
//         if (element == '>') {
//             position += 1
//         }else if (element == '<') {
//             position -= 1
//         }

//     });
    
//     return position
    
// }
function firstStep(a) {
    let s = [...a]
    let sum = 0;
    let final = 0 
    let y = true 
    s.forEach((element, index) => {
        if (y == true) {
            if (element == '>') {
                sum ++  
            }else if (element == '<') {
                sum -- 
                if (sum == -1) {
                    console.log(sum)
                    y = false
                    final = index +1 
                }
            }
        }
    });
    return final
}