const http = require('http');

const userData =
[
{
    name: "swera",
    age: 19,
    email: 'sweratanveer05@gmail.com'
},
{
    name: "sanam",
    age: 20,
    email: 'sanamshahzadi05@gmail.com'
},
{
    name: "Yusra",
    age: 20,
    email: 'Yusrariaz05@gmail.com'
}
]

http.createServer((req, res) => {
res.setHeader("Content-Type", 'application/json')
res.write(JSON.stringify(userData));
res.end();

}).listen(6001)