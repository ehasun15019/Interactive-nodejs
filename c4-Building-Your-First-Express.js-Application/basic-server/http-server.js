const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello World");
});

server.listen(port, () => {
  console.log(`server running in http://localhost:${port}`);
});
