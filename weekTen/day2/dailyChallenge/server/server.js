const exp = require('express');
const cors = require('cors');
const bp = require('body-parser')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const DB = require('./modules/module')

const app = exp()
app.use(cors());
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());

app.post('/user', (req, res)=>{
    const {mail, password} = req.body[0]
    DB.checkUser(password, mail)
    .then(data => {
        if (data.length === 0) {
            res.send({message: 'you first need to register'})
        }else{
            res.send({message: 'i suposse to send you to dashboard'})

            // bcrypt.compareSync(myPlaintextPassword, hash); use this when get the data to the password
        }
    })
    .catch(err => console.log(err))
})

app.post('/register', (req,res) =>{
    const {name, mail, password} = req.body[0]
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    DB.checkEmail(mail)
    .then(data => {
        if (data.length === 1) {
            console.log();
            // res.send({message: 'user alredy exists'}, data)
            res.status(200).send({message: 'user alredy exists'})
        } else {
            // res.send({message: 'im creating new user'})
            DB.createUser(name, mail)
            .then(data => {
                console.log(data);
                res.send({message: 'user created'})
            })
            .catch(e =>{
                res.send({message: e.message})
            })
        }
    })
    .catch(e => {
        console.log(e)
    })
})





app.listen(8000)