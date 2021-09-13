const express = require('express');
const bp = require('body-parser')
const cors = require('cors');
const env = require('dotenv');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const DB = require('./modules/modules');


const app = express()
env.config();
app.use(cors());
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());

app.post('/register', (req,res)=>{
  console.log(req.body);
  const {name, email, password} = req.body
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  if (!name || !email || !password) {
      return res.status(404).json('incorrect form submission')
  }
  DB.createUser(name, email, hash)
  .then(data =>{
    console.log(data);
    res.send({message: 'ok', data})
  })
  .catch(err => {
    res.send({message: err})
  })
})



app.post('/signin', (req,res)=>{
  console.log(req.body);
  const {email, password} = req.body
  if (!email || !password) {
    return res.status(404).json('incorrect form submission')
  }

  DB.checkUser(email)
  .then(data => {
    const valid = bcrypt.compareSync(password, data[0].password);
    if (valid) {
      const payload = {email};
      const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '1h'
        })
      return res.send({user: data, token: token})
    }else{
      res.status(404).json('wrong credentials')
    }
  })
  .catch(err => {
    res.send({message: err})
  })
})



app.listen(process.env.PORT, ()=>{
    console.log('listening on port '+ process.env.PORT);
  })