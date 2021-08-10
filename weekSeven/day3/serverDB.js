const exp = require('express');
const cors = require('cors');
const DB = require('./module/module.js');

const bp = require('body-parser')
// this is the way to retrieve information from a module
// // DB.countries()
// // .then(data => {
// //     console.log(data)
// // })
// // .catch(e => {
// //     console.log(e)
// // })


const app = exp()
app.use(cors());
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));

app.get('/data', (req,res) =>{
    console.log(req.body)
    const {username, password} = req.body

})
app.post('/login', (req,res)=>{
    console.log(req.body)
    DB.createUser(req.body.username, req.body.password)
    .then(data => {
        console.log(data)
        res.send({message: 'ok'})
    })
    .catch(e =>{
        res.send({message: e.message})
    })
})


// exercise to send data to frontend
// // app.route('/getCountries')
// //     .get((req,res) => {
// //         DB.countries()
// //         .then(data => {
// //             res.send(data)
// //         })
// //         .catch(e => {
// //             res.send({message: e.message})
// //         })
// //     })


app.listen(3000)