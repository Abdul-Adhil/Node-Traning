let http = require("http");

let randomColor = require("./randomFive");

http
  .createServer(function (req, res) {
    const color = randomColor();
    let ranColor = JSON.stringify(color, null, 4);
    res.write(ranColor);
    res.end();
  })
  .listen(2222);
