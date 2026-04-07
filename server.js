const http = require('http');
http.createServer((req, res) => {
    res.write("<h1 style='text-align: center; font-size: 50px'> Node_2026</h1>");
    res.write("<p style='text-align: left; font-size: 30px;'> My name is Swera Tanveer I am learning Node.js</p>");
    res.write("<body style='background-color: black; color:white; '>");
    res.end();
}).listen(4800);