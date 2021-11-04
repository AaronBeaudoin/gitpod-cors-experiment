let http = require("http");
let express = require("express");
let app = express();

app.get("/", (request, response) => {
  response.send("Hello world!");
});

let server = http.createServer(app);
server.listen(3000);