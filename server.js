const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1 style="font-size: 40px; color: brown">Hello world!</h1>`);
    res.end();
}).listen(8080);
console.log('Server running at http://localhost:8080/');
