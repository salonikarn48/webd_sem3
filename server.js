const A = require('http');
const server = A.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

// connecting html page m.html to server
server.on('request', (req, res) => {
    if (req.url === '/m.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Hello from m.html</h1></body></html>');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});