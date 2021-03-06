let http = require("http");
let express = require("express");
let app = express();

app.get("/", (request, response) => {
  console.log(`[${new Date()}] Request Received: /`);
  response.sendFile(__dirname + "/index.html");
});

app.get("/url", (request, response) => {
  console.log(`[${new Date()}] Request Received: /url`);
  response.send(process.env.SERVICE_URL);
});

let server = http.createServer(app);
server.listen(3000);
console.log(`[SERVICE_URL] ${process.env.SERVICE_URL}`);
console.log(`[${new Date()}] Server listening on port 3000...`);