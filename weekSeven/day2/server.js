const exp = require('express');

const app = exp();
const user = {
    firstname: 'John',
    lastname: 'Doe'
}
app.use('/', function (req,res) {
    res.send(user)
})

app.listen(8080)
console.log(user)
