const exp = require('express')

app = exp()

app.use('/', exp.static('index.html'))//i dont need this line 
// exp.static(__dirname+'/index.html')
app.get('/', (req,res)=>{
    res.send('<h1>Hello im a get request</h1>')
})

app.listen(3000)