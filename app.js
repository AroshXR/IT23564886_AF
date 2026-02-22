const http = require('http');

/**
 * Main application entry point.
 * This script starts a simple web server.
 */

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1 style="font-family: sans-serif; color: #333;">Node.js Application is Running!</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log('Press Ctrl+C to quit.');
});
