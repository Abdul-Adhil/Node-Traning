let fs = require("fs");

const data = fs.readFileSync("color_palette.json", "utf8");

/**
 *
 *Function to generate a random color from json data
 * @return {Array}
 */
function randomColor() {
  const fiveColor = [];
  const col = JSON.parse(data);
  for (var i = 0; i < 5; i++) {
    let random = Math.floor(Math.random() * (44 - 1 + 1) + 1);
    //console.log("Color is:", col[random]);
    fiveColor.push(col[random]);
  }
  return fiveColor;
}

module.exports = randomColor();
