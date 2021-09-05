const exp = require('express');
const cors = require('cors');
const bp = require('body-parser')
const env = require('dotenv')
const jwt = require('jsonwebtoken')
// const secret = 'naturey'
const bcrypt = require('bcrypt');
const saltRounds = 10;
const DB = require('./modules/module');
const { withAuth } = require('./modules/withAuth');



const app = exp()
env.config();
app.use(cors());
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());

app.post('/user', (req, res)=>{
    const {mail, password} = req.body[0]
    if (!mail || !password) {
        return res.status(404).json('incorrect form submission')
    }
    DB.checkUser(password, mail)
    .then(data => {
        if (data.length === 0) {
            res.send({message: 'you first need to register'})
        }else{
            // res.send({message: 'i suposse to send you to dashboard'})
            const valid = bcrypt.compareSync(password, data[0].password);
            if (valid) {
                const payload = {mail};
                const token = jwt.sign(payload, process.env.SECRET, {
                     expiresIn: '1h'
                  })
                return res.send({user: data[0], token: token})
                //db.select('*').from('users')
                // .where({email})
                // .then(user => {
                // const payload = {email};
                // const token = jwt.sign(payload, secret, {
                //      expiresIn: '1h'
                //   })
                //      console.log('token', token)
                //      res.status(200).json({user: user[0], token: token})
                // }) 
                // .catch(e => {
                //     console.log(e)
                //     res.status(400).json('unable to get user')
                // })
            }else{
                res.status(404).json('wrong credentials')
            }
        }
    })
    .catch(err => console.log(err))
})

app.post('/register', (req,res) =>{
    const {name, mail, password} = req.body[0]
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    if (!name || !mail || !password) {
        return res.status(404).json('incorrect form submission')
    }
    console.log(hash);
    DB.checkEmail(mail)
    .then(data => {
        if (data.length === 1) {
            console.log();
            // res.send({message: 'user alredy exists'}, data)
            res.status(200).send({message: 'user alredy exists'})
        } else {
            // res.send({message: 'im creating new user'})
            DB.createUser(name, mail, hash, res)
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


app.post('/checkToken', withAuth, (req,res)=>{res.sendStatus(200)})


app.listen(process.env.PORT, ()=>{
    console.log('listening on port ' + process.env.PORT);
})