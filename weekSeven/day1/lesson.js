// const axios = require('axios').default;

// let a = 5 
// let b = 2
console.log('hello')

const rb = require('./lessonModule.js')

// console.log(rb)
rb.robot()
.then(data => {
    console.log(data)
})

// this goes in this server file
//inside app.get
// app.get('/robots',(req,res)=>{
    // rb.robot()
// .then(data => {
//     res.send(data)
// })
// .catch(e => {
//     res.send({message: e.message})
// })
// })


// another way to get data from the url req.params show the parameter in the url
// app.get('/shop/:id/:id2', (req,res)=>{
//     console.log(req.params);
//     res.send('<h1>Shop</h1>')
//   })
