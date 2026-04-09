const path = require('path');
const file = "text/Swera Tanveer.txt";


console.log(path.extname(file));
console.log(path.basename(file));
//console.log(path.dirname(file));
console.log(path.parse(file));
console.log(path.isAbsolute(file));
console.log(__dirname);
console.log(__filename);
