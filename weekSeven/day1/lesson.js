// const axios = require('axios').default;

// let a = 5 
// let b = 2
console.log('hello')

const rb  = require('./lessonModule.js')

rb.robots()
.then(data => {
    console.log(data)
})