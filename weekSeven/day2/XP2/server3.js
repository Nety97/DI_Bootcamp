const exp = require('express')
const cors = require('cors')
const app = exp()

app.use(cors())



app.get('/', (req,res) =>{
    res.sendFile(__dirname+"/public/index.html");
})


app.listen(3000)

