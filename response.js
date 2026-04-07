const http = require('http');

const age = 18;
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.write('<p>This is a simple HTTP server in Node.js</p>');
    res.end(`
        <html>
        <head>
        <title>My First Node.js Server</title>
        </head>
        <body>
        <h1>Welcome to my Node.js Server</h1>
        <p>This server is running on port 300</p>
        <h2> `+age+` </h2>
        <h2> `+new Date()+` </h2>
        </body>
        </html>
        `);
}).listen(300);