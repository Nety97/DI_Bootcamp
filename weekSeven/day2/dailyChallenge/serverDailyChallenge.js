const exp = require('express')

app = exp()

app.use('/', exp.static(__dirname+'/public'))

app.get('/aboutMe/:hobby', (req,res)=>{
    res.send('I like archery')
})
app.get('/pic', (req,res)=>{
    res.sendFile(__dirname+"/public/arch.html");
})
app.get('/form', (req,res)=>{
    res.sendFile(__dirname+"/public/form.html");
})
app.get('/formData', (req,res)=>{
    const {mail, message} = req.query;
    // res.render(mail, message)
    console.log(req.query)
    let mes = {
        mail: mail,
        message: message
    }
    res.send(`${mes.mail} sent you a message: ${mes.message}`)
    // res.send(`${req.query.mail} sent you a message: ${req.query.message}`)// can be done also with this
})



app.listen(3000)