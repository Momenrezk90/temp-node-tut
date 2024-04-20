const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to my first server with Node.js');
        return; // Add return statement here
    }
    if (req.url === '/about') {
        res.end('This is the about page');
        return; // Add return statement here
    }
    
    res.end(`
        <h1>Oops!</h1>
        <p>We can't find this page. Click on the link to go to the home page:</p>
        <a href="/">HOME PAGE</a>
    `);
});

server.listen(5000);
