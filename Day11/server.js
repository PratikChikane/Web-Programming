const http = require('http');
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type' : 'text/plain'});
    res.end('Hello, From Node Js Server!\n');
})
server.listen(8080);


console.log('All arguments:', process.argv);
console.log('First argument:', process.argv[2]);
console.log('Second argument:', process.argv[3]);