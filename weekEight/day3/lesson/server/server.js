const exp = require('express')
const cors = require('cors')
const DB = require('./module/module.js')
const bp = require('body-parser')

const app = exp()
app.use(cors());
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());



app.get('/', (req, res) =>{
    res.send('nasofjaksd')
})

app.get('/cont', (req,res) =>{

    // let a = DB.consultCountries()
    DB.consultCountries()
    .then(dat => {
        res.send(dat)
    // res.send(a)
    })
    
})
app.post('/number', (req,res)=>{

    let a = req.body
    console.log(req.body)
    
    DB.consultCities(a)
    .then(data => {
        res.send(data)
    })
})

app.get('/city', (req,res) =>{
    DB.consultCities()
    .then(data => {
        res.send(data)
    })
})

app.listen(8080)