const http = require('http');
// Using Event Emitter API
const server = http.createServer();

// Emits request event
server.on('request',(req,res) =>{
    res.end('Welcome hello')
})

server.listen(5000)