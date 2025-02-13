const http = require('http');
const port = 4000;

http.createServer((req,res)=>{ 
    if(req.url==="/"){
        res.writeHead(200,{'content-type': 'text/html'});
        res.end("Home Page");
    }
    else if(req.url==="/about"){
        res.writeHead(200,{'content-type': 'text/html'});       
        res.end("About Page");
    }
    else if(req.url==="/contact"){
        res.writeHead(200,{'content-type': 'text/html'});
        res.end("Contact Page");
    }
    else{
        res.writeHead(404);
        res.end("Page Not Found");
    }
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


/* 

Today I learned event loop and also revise the callbacks,promises and async/await. then i learn 
to create http server, handle the different routes, and also done the try/catch blocks and now trying to 
understand how the debugger work in node js and it's  c,n,s,o and pause methods with command line. and in tasks i
learn how all event loop works with process.nextTick(), then create http server and also done different routes 
and also done last two tasks.


*/