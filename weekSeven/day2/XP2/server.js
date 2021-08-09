const exp = require('express')
const cors = require('cors')
const app = exp()

app.use(cors())


app.get('/', (req,res) =>{
    const user = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.send(user)
})
app.listen(3000)