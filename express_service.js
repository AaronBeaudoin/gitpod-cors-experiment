let http = require("http");
let cors = require("cors");
let express = require("express");
let app = express();

app.use(cors({
  origin: process.env.APP_URL
}));

app.get("/", (request, response) => {
  console.log(`[${new Date()}] Request Received: /`);
  response.send("This text came from the service!");
});

let server = http.createServer(app);
server.listen(3001);
console.log(`[${new Date()}] Server listening on port 3001...`);