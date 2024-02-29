var http = require('http');
var dt = require('./date');

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(`The date and time is ` + dt.myDate());
    res.end()
}).listen(8080)