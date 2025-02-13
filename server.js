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



