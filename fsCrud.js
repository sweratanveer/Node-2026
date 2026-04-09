const fs = require('fs');

// Create File
//fs.writeFileSync("files/apple.txt", "This is an apple");
//fs.writeFileSync("files/banana.txt", "This is a banana");

// Delete file
//fs.unlinkSync("files/banana.txt");

// read file
//const data = fs.readFileSync("files/apple.txt", "utf-8");
//console.log(data);

// update file
//fs.appendFileSync("files/apple.txt", " and this is good for health");

// Get input from Terminal

const operation = process.argv[2];
if (operation === "write"){
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "files/" + name +".txt";
    fs.writeFileSync(fullName, content);
}

else if (operation === "read"){
    const name = process.argv[3];
    const fullName = "files/" + name +".txt";
    const data = fs.readFileSync(fullName, "utf-8");
    console.log(data);
}

else if (operation === "update"){
    const name = process.argv[3];
    const content = process.argv[4];
    const fullName = "files/" + name +".txt";
    const data =fs.appendFileSync(fullName, content);
    console.log(data);
}

else if (operation === "delete"){
    const name = process.argv[3];
    const fullName = "files/" + name +".txt";
    fs.unlinkSync(fullName);
}

else {
    console.log("Invalid Operation");
}







