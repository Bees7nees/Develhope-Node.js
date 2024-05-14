import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log(request.method, request.url);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<html><h1>Hello World</h1></html>");
});

server.listen(3000, () => {
  console.log("Server running on port 3000 @ http://localhost:3000");
});
