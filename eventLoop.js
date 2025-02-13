// console.log("1st");

// const { resolve } = require("path");

// setTimeout(()=> {
//     console.log("2nd");
// }, 2000);

// console.log("3rd");


// setInterval(() => {
//     console.log("Hello Yashil Busa");
// }, 1000);

new Promise((resolve,reject)=>{
    // resolve("Good");
    reject("Error");
}).then((msg)=>console.log(msg)).catch((err)=>console.log(err));