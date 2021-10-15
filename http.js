const http = require("http");

const requestListner = function (req, res) {
  res.writeHead(200);
  console.log("My services is running.....");
  res.end("Hello, World!");
};
const server = http.createServer(requestListner);
server.listen(8080);
