// console.log("1st");

// const { resolve } = require("path");

// setTimeout(()=> {
//     console.log("2nd");
// }, 2000);

// console.log("3rd");


// setInterval(() => {
//     console.log("Hello Yashil Busa");
// }, 1000);



console.log("Console Log Called");

process.nextTick(() => {
    console.log("process.nextTick Called");
});



async function Test(req, res){
    let output = await print();
        if (output.err) console.log("error");
        else  console.log(output);
}
const print = ()=>{
    return ("Async/Await Called"); 
}
Test();



new Promise((resolve,reject)=>{
    resolve("Promise Called");
    reject("Error");
}).then((msg)=>console.log(msg)).catch((err)=>console.log(err));



setTimeout(() => {
    console.log("Set Timeout Called");
}, 0);



setImmediate(() => {
  console.log("Set Immediate Called");  
});  
