let http = require("http");
let cors = require("cors");
let express = require("express");
let app = express();

app.use(cors({
  origin: process.env.APP_URL,
  // Set below to `true` for at least the first request,
  // then you can disable it again! What!? Why?
  credentials: false
}));

app.get("/", (request, response) => {
  console.log(`[${new Date()}] Request Received: /`);
  response.send("This text came from the service!");
});

let server = http.createServer(app);
server.listen(3001);
console.log(`[APP_URL] ${process.env.APP_URL}`);
console.log(`[${new Date()}] Server listening on port 3001...`);