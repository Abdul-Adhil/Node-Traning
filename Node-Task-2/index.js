let http = require("http");
let url = require("url");

let color = require("./randomFive");

http
  .createServer(function (req, res) {
    let ranColor = JSON.stringify(color, null, 4);
    res.write(ranColor);
    res.end();
  })
  .listen(2222);
