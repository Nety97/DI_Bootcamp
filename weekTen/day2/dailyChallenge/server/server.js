const exp = require('express');
const cors = require('cors');
const bp = require('body-parser')

const app = exp()
app.use(cors());
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());

app.post('/user', (req, res)=>{
    console.log(req.body);
    
})

app.post('/register', (req,res) =>{
    console.log(req.body);
})





app.listen(8000)