const fs = require('fs/promises');

async function fsPromise() {
  try {
    const data = "Some data of datafile.txt Using Async/Await";
    await fs.writeFile('data.txt', data);
  } catch (err) {
    console.log(err.message);
  }
}
console.log("File Writing Successfully");
fsPromise();


const promise = new Promise((resolve,reject)=>{
    const res = "This is For Error Handling Using Promise";
    fs.writeFile('test.txt', res);
    resolve("File Writing Successfully");
    reject();
})

promise
    .then((msg)=> console.log(msg))
    .catch((err)=> console.log(err.message))
