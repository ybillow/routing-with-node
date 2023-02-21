var http = require("http");
http.createServer(function(req,res) {

  var path = req.url.toLowerCase();

  switch(path){
    case "/":
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Home Page');
      break;

    case "/about":
      res.writeHead(200, {'Content-Type': 'text/plain'});
       res.end('About Page');

      break;

    default:
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Not Found');
  }
  
  
  
  
  
  
}).listen(process.env.PORT || 3000);
