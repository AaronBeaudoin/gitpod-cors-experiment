let http = require("http");
// let cors = require("cors");
let express = require("express");
let app = express();

// app.use(cors());
app.get("/", (request, response) => {
  response.send("Hello world!");
});

http.createServer(app).listen(3000);