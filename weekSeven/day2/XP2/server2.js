const exp = require('express')
const cors = require('cors')
const app = exp()

app.use(cors())


app.get('/:id', (req,res) =>{
    console.log(req.params)
    res.send('1234')
})
app.listen(3000)

