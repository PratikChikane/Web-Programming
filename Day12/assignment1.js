const { create } = require('domain');
const h = require('http');
var url = require('url');
const server = h.createServer(
    function(request, response){
        let d = request.url;
        let d1 = url.parse(d, true).query;
        response.writeHead(200, { 'content-type': 'text/html' });
        console.log(request.headers);
        if (d1.fName == 'John' && d1.lName == 'Doe') {
            response.write("<h1>" + d1.name +" "+ d1.name+ "</h1>");
            console.log("the response");
            
    } else{
      response.write(JSON.stringify({ message: "Hello" }));
    //response.write("Hello World ");
    response.end();
    console.log("the response");
    }
    



  });

server.listen(3000);