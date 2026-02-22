const fs = require('fs');
const http = require('http');
const https = require('https');
const myModule = require('./my-module.js');

// 1. Read file
console.log('--- 1. Read File ---');
if (fs.existsSync('file.txt')) {
    fs.readFile('file.txt', 'utf8', function (err, data) {
        if (err) throw err;
        console.log('File content:', data);
    });
} else {
    console.log('file.txt does not exist yet.');
}

// 2. Write to file
console.log('\n--- 2. Write to File ---');
fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err) throw err;
    console.log('File saved!');
});

// 3. Creating a web server
console.log('\n--- 3. Web Server ---');
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1 style="color: blue; font-size: 40px">Hello world</h1>`);
    res.end();
});
server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});

// 4. Making an HTTP request
console.log('\n--- 4. HTTP Request ---');
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });
    resp.on('end', () => {
        console.log('HTTP GET Response:', JSON.parse(data));
    });
}).on('error', (err) => {
    console.log("Error: " + err.message);
});

// 5. Using a module
console.log('\n--- 5. Using a Module ---');
console.log('Module output:', myModule.myFunction());

// 6. Promises
console.log('\n--- 6. Promises ---');
const condition = true;
const myPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});
myPromise.then((result) => {
    console.log('Promise result:', result);
}).catch((error) => {
    console.log('Promise error:', error);
});

// 7. Async/Await
console.log('\n--- 7. Async/Await ---');
async function runAsync() {
    try {
        const result = await myPromise;
        console.log('Async/Await result:', result);
    } catch (error) {
        console.log('Async/Await error:', error);
    }
}
runAsync();
