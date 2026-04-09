const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
/////

let colloectheaderData= fs.readFileSync("html/header.html", "utf-8")

  
/////
let file = "/home";
{
    if(req.url!="/"){
        file = req.url;
    }
}
console.log("html/" + file + ".html");


if (req.url !== "/style.css") {
    fs.readFile("html/" + file + ".html", "utf-8", (err, data) => {
        if (err) {

            res.writeHead(500, { "Content-Type": "text/plain" })
            res.end("Internal Server Error")
            return false
        }
console.log("Reading file: html/" + file + ".html");
        res.write( colloectheaderData + data);
        res.end();

    })
} 
else if (req.url === "/style.css"){
    fs.readFile("html/style.css", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" })
            res.end("CSS Not Found")
            return false
        }
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
    })
}

}).listen(3000);