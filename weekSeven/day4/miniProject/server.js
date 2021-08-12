const exp = require('express');
const cors = require('cors');
// const saveInFile = require('./module/module.js');
const bp = require('body-parser')
const fs = require('fs');

const app = exp()
app.use(cors());
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));


app.post('/',(req,res) => {
    const {item,many} = req.body;
    const items2 = {item,many}
    console.log(items2)
    // console.log(req.body)
    fs.appendFile('items', JSON.stringify(items2), (err)=>{
        if (err) {
            console.log(err)
        }
        else{
            console.log('appended file')
        }
    })

    // res.send(
    //   {
    //     message:'Post OK'
    //   }
    // )
})

app.get('/jojo', (req, res)=>{
    fs.readFile('./items', (err,data)=>{
        if (err) {
            console.log('err', err)
        }
        else{
            console.log('data', data)
            let too = data.toString()
            res.send(too)
            
        }
    })
})
// DB.createUser(req.body.username, req.body.password)
//     .then(data => {
//         console.log(data)
//         res.send({message: 'ok'})
//     })
//     .catch(e =>{
//         res.send({message: e.message})
//     })



app.listen(3000)