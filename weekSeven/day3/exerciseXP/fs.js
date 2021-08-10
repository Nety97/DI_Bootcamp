const fs = require('fs');
// console.log(fs)

fs.readFile('text.txt', 'utf8', (err,data)=>{
    if (err) {
        console.log(err)
    }
    console.log(data)
})

// fs.appendFile('text2.txt', 'Hello my brosky,', (err)=>{
//     if (err) {
//         console.log(err)
//     }
//     console.log('created')
// })

// fs.appendFile('text2.txt', ' brosky can you buy some oranges', (err)=>{
//     if (err) {
//         console.log(err)
//     }
//     console.log('append text')
// })

// fs.unlink('right-left.txt', (err)=>{
//     if (err) {
//         console.log(err)
//     }
//     console.log('deleted')
// })