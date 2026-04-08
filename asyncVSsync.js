// Synchronous method
console.log("Banana");
console.log("Banana2");
console.log("Banana3");
console.log("Banana4");


// Asynchronous method
console.log("Apple");
setTimeout(() => {
    console.log("Apple2");
}, 2000);
console.log("Apple3");
console.log("Apple4");

// Promise method is also asynchronous 
// It is used to handle asynchronous operations in JavaScript. It represents a value that may be available now, or in the future, or never.
// A Promise is in one of three states:
// 1. Pending: The initial state of a Promise. It is neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the Promise has a resolved value.
// 3. Rejected: The operation failed, and the Promise has a reason for the failure.
// A Promise is created using the Promise constructor, which takes a function as an argument. This function is called the executor function, and it is executed immediately when the Promise is created. The executor function takes two arguments: resolve and reject. 
// These are functions that can be called to change the state of the Promise to fulfilled or rejected, respectively.
console.log("Mango");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Mango2");
    }, 2000);
});
promise.then((value) => {
    console.log(value);
});
console.log("Mango3");
console.log("Mango4");

const fs = require('fs');
fs.readFile("text/Swera Tanveer.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);   
    } else {
        console.log(data);
    }
})
console.log("end script");
