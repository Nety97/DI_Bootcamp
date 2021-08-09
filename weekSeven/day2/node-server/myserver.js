const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('<h1>Im first </h1>');
    res.write('<h2>Im second</h2>')
    res.end('<h3>Hello</h3>')
})
server.listen(3000)