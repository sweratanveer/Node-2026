const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    fs.readFile("html/form.html", 'utf-8', (err, data) => {
       
        if (err) {
             res.writeHead(500, { "Content-Type": "text/plain" })
            res.end('internal server error');
            return;
        }

         res.writeHead(200, { "Content-Type": "text/html" })

        if (req.url == '/') {
            res.write(data);
        }
        else if (req.url == '/submit') {
            res.write("<h1> Data submitted </h1>")
        }
        res.end("")
    })
    
    }).listen(6500)




// const { log } = require('console');
// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { "content-type": 'text/html' })
//     console.log(req.url);
//     if (req.url == '/') {
//         res.write(`
//         <form action="/submit" method = "post">
//         <input type = "text" placeholder = "enter name" name = 'name' />
//         <input type = "text" placeholder = "enter email" name = 'email' />
//         <input type = "text" placeholder = "enter number" name = 'number' />
//          <button> Submit </button>
// </form>
//         `);
//     }
// else if(req.url == '/submit'){
//     res.write("<h1> Data submitted </h1>")
// }
//     res.end();
// }).listen(6100

// )