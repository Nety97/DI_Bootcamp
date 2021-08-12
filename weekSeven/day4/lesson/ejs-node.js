const exp = require('express');
const env = require('dotenv');
const cors = require('cors');

const app = exp();
env.config();
app.set('view engine', 'ejs');

// app.use('/', exp.static (__dirname+'/public'))

app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/about', (req,res)=>{
    res.render('about')
})

app.listen(process.env.PORT, ()=>{
    console.log('listening to PORT')
})